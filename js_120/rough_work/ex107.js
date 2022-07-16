function createStudent(name, year) {

  return {
    name: name,
    year: year,
    courseList: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courseList.push(course);
    },

    listCourses() {
      return this.courseList;
    },

    getCourse(code) {
      return this.courseList.filter(course => {
        return course['code'] === code;
      });
    },

    addNote(code, note) {
      let course = this.getCourse(code)[0];
      if (!Object.keys(course).includes('note')) course.note = note;
      else course.note += `; ${note}`;
    },

    viewNotes() {
      this.courseList.forEach(course => {
        if (Object.keys(course).includes('note')) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(code, note) {
      this.courseList.forEach(course => {
        if (course['code'] === code) {
          course.note = note;
        }
      });
    }
  };
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
console.log(foo.listCourses());
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]

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