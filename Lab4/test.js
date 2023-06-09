// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             function logStudent(student){
//                 console.log(this.title + ": " + student);
//             }
//             for (let i = 0; i < this.students.length; i++) {
//                 logStudent.call(this,this.students[i]);
//             }
//         });
//     }
// };
// group.showList();
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((student) => {
            (function() {
                console.log(this.title + ": " + student);
            }).apply(this);
        });
    }
};
group.showList();


