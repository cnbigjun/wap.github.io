let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {

        function f(student){
            console.log(this.title + ": " + student);
        }
        this.students.forEach((student)=>f.call(this,student));//fix here

    }
};
group.showList();