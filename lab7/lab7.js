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
//askPassword(user.loginOk.bind(user), user.loginFail.bind(user));  //bind fix
//askPassword(()=>user.loginOk(), ()=>user.loginFail());// wrapper ifx
const okCall = function (){
    user.loginOk.call(user);
}
const failCall = function (){
    user.loginFail.call(user);
}
const okApply = function (){
    user.loginOk.apply(user);
}
const failApply = function (){
    user.loginFail.apply(user);
}

//askPassword(okCall, failCall);// call ifx
askPassword(okApply, failApply);// apply ifx

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