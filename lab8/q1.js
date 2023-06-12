let student = {
    firstName:'',
    lastName:'',
    grades:[],
    inputNewGrade:function (newGrade){
        this.grades.push(newGrade);
    },
    computeAverageGrade:function (){
        return this.grades.reduce((a,b)=>a+b,0)/this.grades.length;
    }
}
const stu1 = Object.create(student);
stu1.firstName='Ann';
stu1.lastName='Smith';
stu1.inputNewGrade(81);
stu1.inputNewGrade(92);
stu1.inputNewGrade(82);
stu1.inputNewGrade(83);
const stu2 = Object.create(student);
stu2.firstName='Ann1';
stu2.lastName='Smith1';
stu2.inputNewGrade(81);
stu2.inputNewGrade(95);
stu2.inputNewGrade(82);
stu2.inputNewGrade(99);
console.log(stu1.firstName);
const students=[stu1,stu2];
let res1 = students.reduce((a,b)=>a+b.computeAverageGrade(),0)/students.length;
console.log(res1);
