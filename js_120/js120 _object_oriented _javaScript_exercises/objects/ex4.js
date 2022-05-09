function createStudent(name, year) {
  return {
    name: name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },
    addCourse(obj) {
      this.courses.push(obj);
    },
    listCourses() {
      console.log(this.courses);
    },
    addNote(code, note) {
      this.courses.forEach(obj => {
        if (obj['code'] === code) {
          if (obj['note']) obj['note'] = obj['note'] + '; ' + note;
          else obj['note'] = note;
        } 
      });
    },
    viewNotes() {
      let withNotes = this.courses.filter(obj => obj.hasOwnProperty('note'));
      withNotes.forEach(obj => console.log(`${obj.name}: ${obj['note']}`));
    },
    updateNote(code, note) {
      let withNotes = this.courses.filter(obj => obj.code = code);
      withNotes[0].note = note;
    },
  };
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
//  [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"