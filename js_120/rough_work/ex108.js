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

function createSchool() {
  return {
    students: [],

    addStudent(name, year) {
      if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
        this.students.push(createStudent(name, year));
        return this.students[this.students.length - 1];
      } else console.log('Invalid Year');
    },

    enrollStudent(stu, course) {
      stu.addCourse(course);
    },

    addGrade(stud, code, grade) {
      let student = this.students.filter(stu => stu === studt);
      let course = student.courseList.filter(course => course['code'] === code);
      course.grade = grade;
    },

    getReportCard(stu) {
      let student = this.students.filter(student => stu)[0];
      student.courses.forEach(course => {
        if (course.grade) console.log(`${course.name}: In progress`);
        else console.log(`${course.name}: ${course.grade}`);
      });
    },

    courseReport(courseName) {
      let grades = [];
      this.students.forEach(student => {
        student.courseList.forEach(course => {
          if (course.name === courseName) grades.push(`${student.name}: ${course.grade}`);
        });
      });

      if (grades.length === 0) return undefined;
      else {
        console.log(`=${courseName} Grades=`);
        grades.forEach(gradeCombo => {
          console.log(gradeCombo);
        });
      }
    }
  }
}

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
let school = new createSchool();
let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101, grade: 95, });
school.enrollStudent(foo, { name: 'Advanced Math', code: 102, grade: 90, });
school.enrollStudent(foo, { name: 'Physics', code: 202, });

// bar;
// {
//   name: 'bar',
//   year: '1st',
//   courses: [
//     { name: 'Math', code: 101, grade: 91, },
//   ],
// }

// qux;
// {
//   name: 'qux',
//   year: '2nd',
//   courses: [
//     { name: 'Math', code: 101, grade: 93, },
//     { name: 'Advanced Math', code: 102, grade: 90, },
//    ],
// }

school.getReportCard(foo);
// Math: 95
// Advanced Math: 90
// Physics: In progress