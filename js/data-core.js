/* Shared data registry. Each js/data-<course>.js file adds one course. */
window.DATA = {
  courses: [],
  add: function (c) {
    // fill in defaults and give every question a stable id
    c.topics = c.topics || [];
    c.papers = c.papers || [];
    c.topics.forEach(function (t) {
      t.formulas = t.formulas || [];
      (t.questions || []).forEach(function (q, i) { q.id = t.id + '#' + (i + 1); q.topic = t.id; });
    });
    this.courses.push(c);
    this.courses.sort(function (a, b) { return a.exam.date < b.exam.date ? -1 : 1; });
  },
  course: function (id) { return this.courses.filter(function (c) { return c.id === id; })[0]; }
};
