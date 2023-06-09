function askPassword(ok, fail) {
    let password = prompt("password?", '');
    if (password == "rockstar"){
        ok();
    } else{
        fail();
    }
}

let user = {
    name: 'John',
    loginOk() {
        alert(`${this.name} logged in`);
    },
    loginFail() {
        alert(`${this.name} failed to log in`);
    }
};
//askPassword(user.loginOk, user.loginFail);// origin
//askPassword(()=>user.loginOk(), ()=>user.loginFail());// wrapper
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));// bind
//askPassword(()=>user.loginOk.call(user), ()=>user.loginFail.call(user));// call
askPassword(()=>user.loginOk.apply(user), ()=>user.loginFail.apply(user));// apply



let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
                console.log(this.title + ": " + student);
            }.bind(this));//fix here
    }
};
group.showList();