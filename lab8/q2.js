function Student(firstName, lastName, grades = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
}
Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
}

const stu1 = new Student('Ann', 'Smith');
stu1.inputNewGrade(81);
stu1.inputNewGrade(92);
stu1.inputNewGrade(82);
stu1.inputNewGrade(83);
const stu2 = new Student('Ann1', 'Smith1');
stu2.inputNewGrade(81);
stu2.inputNewGrade(95);
stu2.inputNewGrade(82);
stu2.inputNewGrade(99);
const students = [stu1, stu2];
let res1 = students.reduce((a, b) => a + b.computeAverageGrade(), 0) / students.length;
console.log(res1);
