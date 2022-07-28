// function createStudent(name, year) {
//   return {
//     name,
//     year,
//     courses: [],

//     info() {
//       console.log(`${this.name} is a ${this.year} year student`);
//     },

//     addCourse(courseObj) {
//       this.courses.push(courseObj);
//     },

//     listCourses() {
//       return this.courses;
//     },

//     addNote(code, note) {
//       this.courses.forEach(course => {
//         if (course['code'] === code) {
//           if (!course.note) course.note = note;
//           else course.note += `; ${note}`;
//         }
//       });
//     },

//     updateNote(code, note) {
//       this.courses.forEach(course => {
//         if (course['code'] === code) course.note = note;
//       });
//     },

//     viewNotes() {
//       this.courses.forEach(course => {
//         if (course.note) console.log(`${course.name}: ${course.note}`);
//       });
//     }
//   };
// }

function createSchool() {
  return {
    students: [],

    addStudent(studentObj) {
      if (['1st', '2nd', '3rd', '4th', '5th'].includes(studentObj.year)) {
        this.students.push(studentObj);
        return studentObj;
      } else console.log(`Invalid Year`);
    },

    enrollStudent(course, studentObj) {
      let student = this.students.filter(student => student === studentObj)[0];
      student.courses.push(course);
    },

    addGrade(studentObj, courseCode, grade) {
      let student = this.students.filter(student => student === studentObj)[0];
      let course = student.courses.filter(course => course.code === courseCode)[0];
      course.grade = grade;
    },

    getReportCard(studentObj) {
      let student = this.students.filter(student => student === studentObj)[0];
      student.courses.forEach(course => {
        console.log(`${course.name}: ${course.grade ? course.grade : 'In Progress'}`);
      });
    },

    getGrades(courseName) {
      let result = [];
      this.students.forEach(student => {
        let course = student.courses.filter(course => {
          return course.name === courseName;
        })[0];

        if (course && course.grade) result.push([student.name, course.grade]);
      });

      return result;
    },

    courseReport(courseName) {
      let gradesAndStudents = this.getGrades(courseName);

      if (gradesAndStudents.length > 0) {
        console.log(`=${courseName} Grades=`);
        gradesAndStudents.forEach(info => console.log(`${info[0]}: ${info[1]}`));
      } else {
        console.log('undefined')
        return;
      };

      console.log('---');
      console.log(`Course Average: ${this.getAverage(gradesAndStudents)}`);
    },

    getAverage(gradesAndStudents) {
      let sum = gradesAndStudents.reduce((sum, info) => {
        return  sum + info[1];
      }, 0);

      return sum / gradesAndStudents.length;
    }
  };
}

let school = new createSchool();
let foo = school.addStudent({
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
});

let bar = school.addStudent({
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
});

let qux = school.addStudent({
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
});

school.getReportCard(foo);
console.log();

school.courseReport('Math');
console.log();

school.courseReport('Advanced Math');
console.log();

school.courseReport('Physics');
console.log();