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
      return this.courses;
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

let school = {
  students: [],

  addStudent(name, year) {
    if (!(['1st', '2nd', '3rd', '4th', '5th'].indexOf(year)) >= 0) {
      let student = createStudent(name, year);
      student.push(student);
      return student;
    } else console.log(`Invalid Year`);
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  },

  addGrade(student, courseName, grade) {
    let course = student.courses.
      filter(courses => courses.name === courseName)[0];

    if (course) {
      course.grade = grade;
    }
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      if (course.grade) console.log(`${course.name}: ${course.grade}`);
      else console.log(`${course.name}: In progress`);
    });
  },
//  courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.
  courseReport(courseName) {
    function getCourse(student, courseName) {
      return student.listCourses.filter(course => {
        return course.name === courseName;
      })[0];
    }

    let students = this.students.map(student => {
      let course = getCourse(student, courseName) || { grade: undefined };
      return { name: student.name, grade: course.grade };
    }).filter(student => student.grade);

    console.log(`=${courseName} Grades=`);
    let length = students.length;

    let total = students.reduce((sum, student) => {
      console.log(`${student.name}: ${student.grade}`);
      return sum + student.grade;
    }, 0);

    console.log(`---`);
    console.log(`Course Average: ${total / length}`);
  },
};

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
  ],
};

school.getReportCard(foo);
// Math: 95
// Advanced Math: 90
// Physics: In progress