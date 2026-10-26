/* Shared data registry. Each js/data-<course>.js file adds one course. */
window.DATA = {
  courses: [],
  add: function (c) {
    // fill in defaults and give every question a stable id
    c.topics = c.topics || [];
    c.papers = c.papers || [];
    c.topics.forEach(function (t) {
      t.formulas = t.formulas || []; t.cards = t.cards || []; t.slides = t.slides || []; t.notation = t.notation || [];
      (t.questions || []).forEach(function (q, i) { q.id = t.id + '#' + (i + 1); q.topic = t.id; });
      t.cards.forEach(function (cd, i) { cd.id = c.id + '/' + t.id + '@' + i; });
    });
    this.courses.push(c);
    this.courses.sort(function (a, b) { return a.exam.date < b.exam.date ? -1 : 1; });
  },
  // add topics to a course that was registered earlier (lets one course span several files)
  addTopics: function (cid, topics) {
    var c = this.course(cid);
    topics.forEach(function (t) {
      t.formulas = t.formulas || []; t.cards = t.cards || []; t.slides = t.slides || []; t.notation = t.notation || [];
      (t.questions || []).forEach(function (q, i) { q.id = t.id + '#' + (i + 1); q.topic = t.id; });
      t.cards.forEach(function (cd, i) { cd.id = cid + '/' + t.id + '@' + i; });
      c.topics.push(t);
    });
    c.pending = null;
  },
  course: function (id) { return this.courses.filter(function (c) { return c.id === id; })[0]; }
};
