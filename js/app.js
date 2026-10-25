(function () {
'use strict';
var D = window.DATA, app = document.getElementById('app');
var START = '2026-10-25', BLOCK = 45;
var DAYN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/* ---------- storage ---------- */
function load() { try { return JSON.parse(localStorage.getItem('sg:state')) || {}; } catch (e) { return {}; } }
var S = load();
S.hours = S.hours || {}; S.wk = S.wk || [3, 3, 4, 4, 4, 4, 3]; S.results = S.results || {}; S.seen = S.seen || {};
S.mocks = S.mocks || []; S.sheet = S.sheet || {}; S.dayPlan = S.dayPlan || null;
function save() { try { localStorage.setItem('sg:state', JSON.stringify(S)); } catch (e) {} }

/* ---------- helpers ---------- */
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function pd(s) { var p = s.split('-'); return new Date(+p[0], +p[1] - 1, +p[2]); }
function ds(d) { return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
function addDays(s, n) { var d = pd(s); d.setDate(d.getDate() + n); return ds(d); }
function diffDays(a, b) { return Math.round((pd(b) - pd(a)) / 864e5); }
function fmt(s) { var d = pd(s); return DAYN[d.getDay()] + ' ' + d.getDate() + ' ' + MON[d.getMonth()]; }
function today() { var t = ds(new Date()); return t < START ? START : t; }
function hoursFor(s) { return s in S.hours ? S.hours[s] : S.wk[pd(s).getDay()]; }
function tkey(c, t) { return c.id + '/' + t.id; }
function topicOf(c, id) { return c.topics.filter(function (t) { return t.id === id; })[0]; }
function examWhen(c) { var p = c.exam.date.split('-'), t = c.exam.time.split(':'); return new Date(+p[0], +p[1] - 1, +p[2], +t[0], +t[1]); }
function el(html) { var d = document.createElement('div'); d.innerHTML = html; return d.firstElementChild; }

/* ---------- mastery ---------- */
function mastery(key) {
  var r = (S.results[key] || []).slice(-8); if (!r.length) return null;
  var n = 0, d = 0; r.forEach(function (x, i) { var w = 1 + i * 0.5; n += w * x.s; d += w; }); return n / d;
}
function level(key) {
  var m = mastery(key), n = (S.results[key] || []).length;
  if (m === null) return S.seen[key] ? { k: 'new', t: 'Read, not practised' } : { k: 'none', t: 'Not started' };
  if (m < 0.5) return { k: 'weak', t: 'Needs work' };
  if (m < 0.8 || n < 3) return { k: 'ok', t: 'Getting there' };
  return { k: 'strong', t: 'Strong' };
}
function need(c, t) {
  var m = mastery(tkey(c, t)); if (m === null) m = 0;
  return Math.max(0.15, t.freq) * (t.assigned ? 0.6 : 1) * (1 - m);
}
function ready(c) {
  if (!c.topics.length) return 0;
  var n = 0, d = 0; c.topics.forEach(function (t) { var f = Math.max(0.15, t.freq), m = mastery(tkey(c, t)) || 0; n += f * m; d += f; }); return n / d;
}
function record(c, t, qid, s) {
  var k = tkey(c, t); (S.results[k] = S.results[k] || []).push({ q: qid, s: s, t: Date.now() }); save();
}

/* ---------- planner ---------- */
function lastExam() { return D.courses.reduce(function (m, c) { return c.exam.date > m ? c.exam.date : m; }, START); }
function mockBlocks(c) { return c.exam.durMin >= 120 ? 3 : 2; }
function buildPlan() {
  var start = today(), end = lastExam(), days = [], sim = {}, seen = {};
  D.courses.forEach(function (c) {
    if (c.topics.length) c.topics.forEach(function (t) { var k = tkey(c, t); sim[k] = need(c, t); seen[k] = !!(S.seen[k] || (S.results[k] || []).length); });
  });
  for (var d = start; d <= end; d = addDays(d, 1)) {
    var nb = Math.floor(hoursFor(d) * 60 / BLOCK + 1e-9), blocks = [], used = {}, topicsToday = {};
    var live = D.courses.filter(function (c) { return c.exam.date >= d; });
    function push(b) { blocks.push(b); nb--; }
    live.forEach(function (c) {
      var dl = diffDays(d, c.exam.date);
      if (dl === 0) { for (var i = 0; i < 2 && nb > 0; i++) push({ c: c.id, kind: 'review', t: null }); used[c.id] = (used[c.id] || 0) + 1; }
      else if (dl === 1 && c.topics.length) { var n = Math.min(mockBlocks(c), nb); for (var j = 0; j < n; j++) push({ c: c.id, kind: 'mock', t: null, part: j + 1, of: n }); used[c.id] = (used[c.id] || 0) + 1; }
    });
    live = live.filter(function (c) { return c.exam.date > d; });
    while (nb > 0 && live.length) {
      var best = null, bs = -1;
      live.forEach(function (c) {
        var sum = 0; if (c.topics.length) c.topics.forEach(function (t) { sum += sim[tkey(c, t)]; }); else sum = 6; /* placeholder weight until the course has content */
        var sc = sum / Math.pow(diffDays(d, c.exam.date) + 0.5, 1.3) * Math.pow(0.78, used[c.id] || 0);
        if (sc > bs) { bs = sc; best = c; }
      });
      used[best.id] = (used[best.id] || 0) + 1;
      if (!best.topics.length) { push({ c: best.id, kind: 'pending', t: null }); continue; }
      var bt = null, bn = -1;
      best.topics.forEach(function (t) { var k = tkey(best, t), v = sim[k] * (topicsToday[k] ? 0.4 : 1); if (v > bn) { bn = v; bt = t; } });
      var k2 = tkey(best, bt), kind = seen[k2] ? 'practice' : 'learn';
      topicsToday[k2] = 1; seen[k2] = true; sim[k2] *= 0.55;
      push({ c: best.id, kind: kind, t: bt.id });
    }
    days.push({ date: d, hours: hoursFor(d), blocks: blocks });
  }
  return days;
}
function todayBlocks() {
  var t = today(), h = hoursFor(t);
  if (!S.dayPlan || S.dayPlan.date !== t || S.dayPlan.hours !== h) {
    var p = buildPlan()[0]; S.dayPlan = { date: t, hours: h, blocks: (p ? p.blocks : []).map(function (b) { b.done = false; return b; }) }; save();
  }
  return S.dayPlan.blocks;
}
function blockLabel(b) {
  var c = D.course(b.c), t = b.t && topicOf(c, b.t);
  if (b.kind === 'learn') return 'Learn: ' + t.name;
  if (b.kind === 'practice') return 'Practise: ' + t.name;
  if (b.kind === 'mock') return 'Mock exam (part ' + b.part + ' of ' + b.of + ')';
  if (b.kind === 'review') return 'Final review: weak topics + notes';
  return 'Add course content (files pending)';
}
function blockHref(b) {
  if (b.kind === 'learn') return '#/topic/' + b.c + '/' + b.t + '/learn';
  if (b.kind === 'practice') return '#/topic/' + b.c + '/' + b.t + '/practice';
  if (b.kind === 'mock') return '#/mock/' + b.c;
  return '#/course/' + b.c;
}

/* ---------- views ---------- */
var timer = null;
function setNav(n) { [].forEach.call(document.querySelectorAll('#nav a'), function (a) { a.classList.toggle('on', a.getAttribute('data-n') === n); }); }
function dot(c) { return '<span class="dot" style="background:' + c.color + '"></span>'; }
function countdown(c) {
  var ms = examWhen(c) - new Date(), d = Math.ceil(ms / 864e5);
  return ms < 0 ? 'done' : (d <= 1 ? 'tomorrow/today' : d + ' days');
}

function viewToday() {
  setNav('today');
  var t = today(), blocks = todayBlocks(), nextEx = D.courses.filter(function (c) { return c.exam.date >= t; })[0];
  var h = '<h1>' + fmt(t) + '</h1><p class="mute">' + (nextEx ? 'Next exam: ' + dot(nextEx) + nextEx.code + ' in ' + countdown(nextEx) : 'All exams finished.') + ' &middot; ' + hoursFor(t) + ' h planned today</p>';
  h += '<div class="card"><div class="row sp"><b>Today\'s plan</b><span><a href="#/plan">change hours</a> &middot; <a href="#" id="replan">re-plan</a></span></div>';
  if (!blocks.length) h += '<p class="mute">No study blocks today. Set hours in the Plan tab.</p>';
  blocks.forEach(function (b, i) {
    var c = D.course(b.c);
    h += '<div class="blk' + (b.done ? ' done' : '') + '"><input type="checkbox" data-i="' + i + '"' + (b.done ? ' checked' : '') + ' aria-label="done"><div class="grow nm">' + dot(c) + '<a href="' + blockHref(b) + '">' + esc(blockLabel(b)) + '</a><div class="mute">' + c.code + ' &middot; ' + BLOCK + ' min</div></div></div>';
  });
  h += '</div>';
  h += '<h2>Exams</h2>';
  D.courses.forEach(function (c) {
    var e = c.exam, w = examWhen(c);
    h += '<a class="card" href="#/course/' + c.id + '"><div class="row sp"><b>' + dot(c) + c.code + '</b><span class="tag">' + countdown(c) + '</span></div><div class="mute">' + fmt(e.date) + ' ' + e.time + ' &middot; ' + (e.durMin / 60) + ' h + ' + e.readMin + ' min reading</div><div class="bar" style="margin-top:8px"><i style="width:' + Math.round(ready(c) * 100) + '%;background:' + c.color + '"></i></div><div class="mute">Readiness ' + Math.round(ready(c) * 100) + '%</div></a>';
  });
  var weak = []; D.courses.forEach(function (c) { if (c.exam.date >= t) c.topics.forEach(function (tp) { weak.push({ c: c, t: tp, n: need(c, tp) / Math.pow(diffDays(t, c.exam.date) + 1, 0.5) }); }); });
  weak.sort(function (a, b) { return b.n - a.n; });
  if (weak.length) {
    h += '<h2>Focus on these first</h2>';
    weak.slice(0, 4).forEach(function (w) {
      var lv = level(tkey(w.c, w.t));
      h += '<a class="card" href="#/topic/' + w.c.id + '/' + w.t.id + '"><div class="row sp"><span>' + dot(w.c) + esc(w.t.name) + '</span><span class="tag ' + lv.k + '">' + lv.t + '</span></div></a>';
    });
  }
  app.innerHTML = h;
  app.querySelector('#replan').onclick = function (e) { e.preventDefault(); S.dayPlan = null; save(); route(); };
  [].forEach.call(app.querySelectorAll('.blk input'), function (cb) { cb.onchange = function () { S.dayPlan.blocks[+cb.dataset.i].done = cb.checked; save(); route(); }; });
}

function viewCourses() {
  setNav('courses');
  var h = '<h1>Courses</h1><p class="mute">Sorted by exam date.</p>';
  D.courses.forEach(function (c) {
    h += '<a class="card" href="#/course/' + c.id + '"><div class="row sp"><b>' + dot(c) + c.code + '</b><span class="tag">' + (c.topics.length ? c.topics.length + ' topics' : 'content pending') + '</span></div><div>' + esc(c.name) + '</div><div class="mute">' + fmt(c.exam.date) + ' &middot; ' + countdown(c) + '</div></a>';
  });
  app.innerHTML = h;
}

function viewCourse(id) {
  setNav('courses');
  var c = D.course(id); if (!c) return viewCourses();
  var e = c.exam, t = today();
  var h = '<p><a href="#/courses">&larr; Courses</a></p><h1>' + dot(c) + c.code + '</h1><p>' + esc(c.name) + '</p>';
  if (c.summary) h += '<p class="mute">' + esc(c.summary) + '</p>';
  h += '<div class="card"><b>Exam</b><br>' + fmt(e.date) + ', ' + e.time + ' &middot; ' + (e.durMin / 60) + ' h + ' + e.readMin + ' min reading<br><span class="mute">Notes: ' + esc(e.notes) + '<br>Calculator: ' + esc(e.calc) + (e.format ? '<br>' + esc(e.format) : '') + '</span></div>';
  if (c.pending) h += '<div class="box"><b>Content status:</b> ' + esc(c.pending) + '</div>';
  if (c.topics.length) {
    h += '<div class="row"><a class="btn primary" href="#/mock/' + c.id + '">Mock exam</a>' + (e.notesAllowed ? '<a class="btn" href="#/sheet/' + c.id + '">Build my A4 notes sheet</a>' : '') + '</div>';
    h += '<h2>Topics, most exam-likely and weakest first</h2>';
    var list = c.topics.slice().sort(function (a, b) { return need(c, b) - need(c, a); });
    list.forEach(function (tp) {
      var k = tkey(c, tp), lv = level(k), m = mastery(k);
      h += '<a class="card" href="#/topic/' + c.id + '/' + tp.id + '"><div class="row sp"><b>' + esc(tp.name) + '</b><span class="tag ' + lv.k + '">' + lv.t + '</span></div><div class="mute">' + esc(tp.freqNote || '') + (tp.assigned ? ' &middot; <i>also in assignment</i>' : '') + '</div><div class="bar" style="margin-top:8px"><i style="width:' + Math.round((m || 0) * 100) + '%"></i></div></a>';
    });
  }
  app.innerHTML = h;
}

function viewTopic(cid, tid, tab) {
  setNav('courses');
  var c = D.course(cid), t = c && topicOf(c, tid); if (!t) return viewCourses();
  var k = tkey(c, t), lv = level(k);
  var h = '<p><a href="#/course/' + cid + '">&larr; ' + c.code + '</a></p><h1>' + esc(t.name) + '</h1><div class="row"><span class="tag ' + lv.k + '">' + lv.t + '</span><span class="mute">' + esc(t.freqNote || '') + '</span></div>';
  h += '<div class="tabs"><a href="#/topic/' + cid + '/' + tid + '/learn" class="' + (tab !== 'practice' ? 'on' : '') + '">Learn</a><a href="#/topic/' + cid + '/' + tid + '/practice" class="' + (tab === 'practice' ? 'on' : '') + '">Practise (' + t.questions.length + ')</a></div>';
  if (tab === 'practice') { app.innerHTML = h + '<div id="qa"></div>'; return practice(c, t, app.querySelector('#qa')); }
  if (t.assigned && t.assignedNote) h += '<div class="box">' + esc(t.assignedNote) + '</div>';
  h += '<div class="lesson card">' + t.lesson + '</div>';
  if (t.example) h += '<div class="card"><b>Worked example</b><p>' + t.example.q + '</p><ol>' + t.example.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol></div>';
  if (t.formulas.length) h += '<div class="card"><b>Key formulas (for your notes sheet)</b><ul>' + t.formulas.map(function (f) { return '<li>' + f + '</li>'; }).join('') + '</ul></div>';
  h += '<p><a class="btn primary" id="gp" href="#/topic/' + cid + '/' + tid + '/practice">I\'ve read it &ndash; start practice</a></p>';
  app.innerHTML = h;
  S.seen[k] = true; save();
}

function showTTable(c) {
  if (!c.tTable) return;
  var tt = c.tTable, h = '<div class="modal"><div><b>t-table (given in the exam)</b><p class="mute">Row = df, column = P(T ≤ t*). Bottom row = standard normal.</p><table class="tt"><tr><th>df</th>' + tt.cols.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr>';
  Object.keys(tt.rows).forEach(function (r) { h += '<tr><th>' + r + '</th>' + tt.rows[r].map(function (v) { return '<td>' + v + '</td>'; }).join('') + '</tr>'; });
  h += '</table><p><button class="primary" id="cl">Close</button></p></div></div>';
  var m = el(h); document.body.appendChild(m); m.querySelector('#cl').onclick = function () { m.remove(); }; m.onclick = function (e) { if (e.target === m) m.remove(); };
}

function practice(c, t, box) {
  var ans = {}; (S.results[tkey(c, t)] || []).forEach(function (r) { ans[r.q] = r.s; });
  var qs = t.questions.slice().sort(function (a, b) {
    var sa = a.id in ans ? ans[a.id] + 1 : 0, sb = b.id in ans ? ans[b.id] + 1 : 0; return sa - sb;
  }).slice(0, 8), i = 0, got = 0;
  function next() {
    if (i >= qs.length) {
      var m = mastery(tkey(c, t)), lv = level(tkey(c, t));
      box.innerHTML = '<div class="card"><h2>Session done</h2><p>This round: ' + got.toFixed(1).replace('.0', '') + ' / ' + qs.length + '.</p><p>Topic level now: <span class="tag ' + lv.k + '">' + lv.t + '</span> (' + Math.round((m || 0) * 100) + '%)</p><p><a class="btn primary" href="#/">Back to today</a> <a class="btn" href="#/course/' + c.id + '">Course topics</a></p></div>';
      return;
    }
    var q = qs[i], h = '<div class="card"><div class="row sp"><span class="mute">Question ' + (i + 1) + ' of ' + qs.length + (q.marks ? ' &middot; ' + q.marks + ' mark' + (q.marks > 1 ? 's' : '') : '') + '</span>' + (c.tTable ? '<button class="sm" id="tt">t-table</button>' : '') + '</div>' + (q.src && q.src !== 'Practice' ? '<span class="tag">Past paper: ' + esc(q.src) + '</span>' : '') + '<p class="q">' + q.q + '</p>';
    if (q.type === 'mcq') {
      h += q.opts.map(function (o, n) { return '<button class="opt" data-n="' + n + '">' + o + '</button>'; }).join('') + '<div id="fb"></div></div>';
      box.innerHTML = h;
      [].forEach.call(box.querySelectorAll('.opt'), function (b) {
        b.onclick = function () {
          var n = +b.dataset.n; [].forEach.call(box.querySelectorAll('.opt'), function (x) { x.disabled = true; });
          box.querySelectorAll('.opt')[q.a].classList.add('right'); if (n !== q.a) b.classList.add('wrong');
          var s = n === q.a ? 1 : 0; got += s; record(c, t, q.id, s);
          box.querySelector('#fb').innerHTML = '<div class="box"><b>' + (s ? 'Correct.' : 'Not quite.') + '</b> ' + q.why + '</div><button class="primary" id="nx">Next</button>';
          box.querySelector('#nx').onclick = function () { i++; next(); };
        };
      });
    } else {
      h += '<textarea rows="4" placeholder="Work it out here first (not saved)"></textarea><div class="row" style="margin-top:8px">' + (q.hint ? '<button id="hn">Hint</button>' : '') + '<button class="primary" id="sh">Show worked solution</button></div><div id="fb"></div></div>';
      box.innerHTML = h;
      if (q.hint) box.querySelector('#hn').onclick = function () { box.querySelector('#fb').insertAdjacentHTML('afterbegin', '<div class="box"><b>Hint:</b> ' + q.hint + '</div>'); };
      box.querySelector('#sh').onclick = function () {
        box.querySelector('#sh').disabled = true;
        box.querySelector('#fb').innerHTML += '<div class="box"><b>Worked solution</b><ol>' + q.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol><b>Answer: ' + q.ans + '</b></div><p>How did you go?</p><div class="row"><button data-s="1">Got it</button><button data-s="0.5">Partly</button><button data-s="0">Missed it</button></div>';
        [].forEach.call(box.querySelectorAll('[data-s]'), function (b) { b.onclick = function () { var s = +b.dataset.s; got += s; record(c, t, q.id, s); i++; next(); }; });
      };
    }
    var tb = box.querySelector('#tt'); if (tb) tb.onclick = function () { showTTable(c); };
  }
  next();
}

function viewPlan() {
  setNav('plan');
  var plan = buildPlan(), t = today();
  var h = '<h1>Study plan</h1><p class="mute">Set how many hours you can study each day. The plan rebuilds around that and around what you are weak at. Blocks are ' + BLOCK + ' min.</p>';
  h += '<div class="card"><b>Usual hours by weekday</b><div class="row" style="margin-top:8px">';
  [1, 2, 3, 4, 5, 6, 0].forEach(function (d) { h += '<label class="stepper">' + DAYN[d] + ' <input type="number" min="0" max="12" step="0.5" data-wd="' + d + '" value="' + S.wk[d] + '"></label>'; });
  h += '</div><p class="mute">Changing these resets any day you haven\'t set by hand.</p></div>';
  plan.forEach(function (d) {
    var ex = D.courses.filter(function (c) { return c.exam.date === d.date; });
    h += '<div class="day"><div class="d">' + fmt(d.date) + '</div><div>';
    ex.forEach(function (c) { h += '<span class="chip" style="background:#111">EXAM ' + c.code + ' ' + c.exam.time + '</span>'; });
    var agg = {}; d.blocks.forEach(function (b) { var k = b.c + '|' + b.kind + '|' + (b.t || ''); agg[k] = agg[k] || { b: b, n: 0 }; agg[k].n++; });
    Object.keys(agg).forEach(function (k) { var b = agg[k].b, c = D.course(b.c); h += '<a class="chip" style="background:' + c.color + ';text-decoration:none" href="' + blockHref(b) + '">' + c.code + ' ' + esc(blockLabel(b).replace(/ \(part.*\)/, '')) + (agg[k].n > 1 ? ' ×' + agg[k].n : '') + '</a>'; });
    if (!d.blocks.length && !ex.length) h += '<span class="mute">Rest day</span>';
    h += '</div><div class="stepper"><input type="number" min="0" max="12" step="0.5" data-day="' + d.date + '" value="' + d.hours + '" aria-label="hours for ' + d.date + '"><span class="mute">h</span></div></div>';
  });
  app.innerHTML = h;
  [].forEach.call(app.querySelectorAll('[data-wd]'), function (i) { i.onchange = function () { S.wk[+i.dataset.wd] = Math.max(0, +i.value || 0); S.hours = {}; S.dayPlan = null; save(); route(); }; });
  [].forEach.call(app.querySelectorAll('[data-day]'), function (i) { i.onchange = function () { S.hours[i.dataset.day] = Math.max(0, +i.value || 0); S.dayPlan = null; save(); route(); }; });
}

/* ---------- mock exam ---------- */
function paperQs(c, p) {
  var out = []; c.topics.forEach(function (t) { t.questions.forEach(function (q) { if (q.paper === p.id) out.push(q); }); });
  return out.sort(function (a, b) { return a.order - b.order; });
}
function viewMock(cid, pid) {
  setNav('courses');
  var c = D.course(cid); if (!c || !c.papers.length) return viewCourse(cid);
  if (!pid) {
    var h = '<p><a href="#/course/' + cid + '">&larr; ' + c.code + '</a></p><h1>Mock exam</h1><div class="box"><b>Exam rules to practise under:</b><br>Notes: ' + esc(c.exam.notes) + '<br>Calculator: ' + esc(c.exam.calc) + '<br>Timed: ' + c.exam.readMin + ' min reading (no writing), then the writing time.</div>';
    c.papers.forEach(function (p) {
      var qs = paperQs(c, p), marks = qs.reduce(function (s, q) { return s + q.marks; }, 0), mins = Math.round(p.fullMin * marks / p.fullMarks);
      h += '<a class="card" href="#/mock/' + cid + '/' + p.id + '"><b>' + esc(p.name) + '</b><div class="mute">' + qs.length + ' parts &middot; ' + marks + ' marks &middot; ' + mins + ' min + ' + c.exam.readMin + ' min reading</div><div class="mute">' + esc(p.note || '') + '</div></a>';
    });
    var hist = S.mocks.filter(function (m) { return m.c === cid; });
    if (hist.length) { h += '<h2>Past attempts</h2>'; hist.slice(-6).reverse().forEach(function (m) { h += '<div class="card">' + esc(m.p) + ': <b>' + m.got + '/' + m.max + '</b> (' + Math.round(100 * m.got / m.max) + '%) <span class="mute">' + new Date(m.t).toLocaleDateString() + '</span></div>'; }); }
    app.innerHTML = h; return;
  }
  var p = c.papers.filter(function (x) { return x.id === pid; })[0], qs = paperQs(c, p), marks = qs.reduce(function (s, q) { return s + q.marks; }, 0), mins = Math.round(p.fullMin * marks / p.fullMarks);
  var head = '<p class="noprint"><a href="#/mock/' + cid + '">&larr; Papers</a></p><h1>' + esc(p.name) + '</h1>';
  function qhtml(withBox) {
    return qs.map(function (q, n) { return '<div class="card"><div class="row sp"><b>' + esc(q.src) + '</b><span class="tag">' + q.marks + ' marks</span></div><p class="q">' + q.q + '</p>' + (withBox ? '<textarea rows="5" placeholder="Working (not saved)"></textarea>' : '') + '</div>'; }).join('');
  }
  function clock(sec) { return Math.floor(sec / 60) + ':' + ('0' + (sec % 60)).slice(-2); }
  function run(label, sec, onEnd, showQs) {
    var left = sec;
    app.innerHTML = head + '<div class="card row sp"><div><div class="mute">' + label + '</div><div class="timer" id="tm">' + clock(left) + '</div></div><div><button id="sk" class="primary">' + (showQs ? 'Start writing now' : 'Finish &amp; mark') + '</button></div></div>' + (c.tTable ? '<p><button class="sm" id="tt">Show t-table</button></p>' : '') + qhtml(!showQs);
    if (showQs) [].forEach.call(app.querySelectorAll('textarea'), function (x) { x.disabled = true; });
    var tb = app.querySelector('#tt'); if (tb) tb.onclick = function () { showTTable(c); };
    function end() { clearInterval(timer); onEnd(); }
    timer = setInterval(function () { left--; var tm = document.getElementById('tm'); if (tm) tm.textContent = clock(Math.max(left, 0)); if (left <= 0) end(); }, 1000);
    app.querySelector('#sk').onclick = end;
  }
  function mark() {
    var h = head + '<h2>Mark yourself</h2><p class="mute">Compare with the worked solution and give yourself an honest mark for each part.</p>';
    qs.forEach(function (q, n) {
      h += '<div class="card"><div class="row sp"><b>' + esc(q.src) + '</b><span><input type="number" min="0" max="' + q.marks + '" step="0.5" value="0" data-n="' + n + '"> / ' + q.marks + '</span></div><p>' + q.q + '</p><div class="box"><ol>' + q.steps.map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol><b>' + q.ans + '</b></div></div>';
    });
    h += '<button class="primary" id="sv">Save result</button>';
    app.innerHTML = h;
    app.querySelector('#sv').onclick = function () {
      var got = 0; [].forEach.call(app.querySelectorAll('[data-n]'), function (i) {
        var q = qs[+i.dataset.n], v = Math.min(q.marks, Math.max(0, +i.value || 0)); got += v;
        record(c, topicOf(c, q.topic), q.id, v / q.marks);
      });
      S.mocks.push({ c: cid, p: p.name, got: got, max: marks, t: Date.now() }); save();
      app.innerHTML = head + '<div class="card"><h2>Result: ' + got + ' / ' + marks + ' (' + Math.round(100 * got / marks) + '%)</h2><p>Your topic levels have been updated from this paper. Target is about 70%.</p><a class="btn primary" href="#/course/' + cid + '">See weak topics</a></div>';
    };
  }
  app.innerHTML = head + '<div class="card"><p><b>' + marks + ' marks &middot; ' + mins + ' min writing &middot; ' + c.exam.readMin + ' min reading</b></p><p>Notes: ' + esc(c.exam.notes) + '<br>Calculator: ' + esc(c.exam.calc) + '</p><p class="mute">Phone away. Tables are one tap away like the real paper. Solutions stay hidden until you finish.</p><button class="primary" id="go">Begin reading time</button></div>';
  app.querySelector('#go').onclick = function () {
    run('Reading time (no writing)', c.exam.readMin * 60, function () {
      run('Writing time', mins * 60, mark, false);
    }, true);
  };
}

/* ---------- A4 notes sheet ---------- */
function viewSheet(cid) {
  setNav('courses');
  var c = D.course(cid); if (!c || !c.topics.length) return viewCourse(cid);
  var sel = S.sheet[cid]; if (!sel) { sel = S.sheet[cid] = { off: {}, extra: '' }; }
  var sorted = c.topics.slice().sort(function (a, b) { return need(c, b) - need(c, a); });
  var h = '<p class="noprint"><a href="#/course/' + cid + '">&larr; ' + c.code + '</a></p><h1 class="noprint">Notes sheet: ' + c.code + '</h1><p class="mute noprint">Allowed: ' + esc(c.exam.notes) + '. Use this as a guide, then <b>copy it by hand</b> if handwriting is required. Writing it out also helps it stick.</p><div class="card noprint">';
  sorted.forEach(function (t) {
    h += '<b>' + esc(t.name) + '</b>';
    t.formulas.forEach(function (f, n) { var key = t.id + n; h += '<label style="display:block"><input type="checkbox" data-k="' + key + '"' + (sel.off[key] ? '' : ' checked') + '> ' + f + '</label>'; });
  });
  h += '<p><b>Your own extra notes</b></p><textarea id="ex" rows="4">' + esc(sel.extra) + '</textarea></div><div class="row sp noprint"><span class="mute" id="fit"></span><button class="primary" id="pr">Print / save as PDF</button></div><div class="a4" id="sheet"></div>';
  app.innerHTML = h;
  function draw() {
    var out = ''; sorted.forEach(function (t) { var rows = t.formulas.filter(function (f, n) { return !sel.off[t.id + n]; }); if (rows.length) out += '<div><b>' + esc(t.name) + '</b><br>' + rows.join('<br>') + '</div>'; });
    if (sel.extra) out += '<div>' + esc(sel.extra).replace(/\n/g, '<br>') + '</div>';
    var s = document.getElementById('sheet'); s.innerHTML = out;
    document.getElementById('fit').textContent = s.scrollWidth > s.clientWidth + 2 || s.scrollHeight > s.clientHeight + 2 ? 'Too much for one A4 side. Untick something.' : 'Fits on one side.';
  }
  [].forEach.call(app.querySelectorAll('[data-k]'), function (cb) { cb.onchange = function () { sel.off[cb.dataset.k] = !cb.checked; save(); draw(); }; });
  app.querySelector('#ex').oninput = function (e) { sel.extra = e.target.value; save(); draw(); };
  app.querySelector('#pr').onclick = function () { window.print(); };
  draw();
}

/* ---------- backup ---------- */
function viewBackup() {
  setNav('backup');
  app.innerHTML = '<h1>Backup</h1><p class="mute">Your progress is saved in this browser only. Export to move it to another device (e.g. laptop to phone).</p><div class="card"><button class="primary" id="ex">Copy my progress</button><p class="mute">Then on the other device, paste it below.</p><textarea id="im" rows="4" placeholder="Paste progress here"></textarea><p><button id="go">Import</button> <button id="rs">Reset everything</button></p><div id="msg" class="mute"></div></div>';
  var msg = app.querySelector('#msg');
  app.querySelector('#ex').onclick = function () { var v = JSON.stringify(S); app.querySelector('#im').value = v; try { navigator.clipboard.writeText(v); msg.textContent = 'Copied.'; } catch (e) { msg.textContent = 'Select the text in the box and copy it.'; } };
  app.querySelector('#go').onclick = function () { try { S = JSON.parse(app.querySelector('#im').value); save(); msg.textContent = 'Imported. Reloading…'; location.hash = '#/'; location.reload(); } catch (e) { msg.textContent = 'That did not look like valid progress.'; } };
  app.querySelector('#rs').onclick = function () { if (confirm('Delete all progress?')) { localStorage.removeItem('sg:state'); location.hash = '#/'; location.reload(); } };
}

/* ---------- router ---------- */
function route() {
  clearInterval(timer);
  var p = (location.hash.replace(/^#\/?/, '') || '').split('/');
  window.scrollTo(0, 0);
  try {
    switch (p[0]) {
      case 'courses': return viewCourses();
      case 'course': return viewCourse(p[1]);
      case 'topic': return viewTopic(p[1], p[2], p[3]);
      case 'plan': return viewPlan();
      case 'mock': return viewMock(p[1], p[2]);
      case 'sheet': return viewSheet(p[1]);
      case 'backup': return viewBackup();
      default: return viewToday();
    }
  } catch (e) { app.innerHTML = '<div class="card"><b>Something broke.</b><pre>' + esc(e.stack || e) + '</pre><a href="#/">Home</a></div>'; }
}
window.addEventListener('hashchange', route);
route();
if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) navigator.serviceWorker.register('sw.js').catch(function () {});
})();
