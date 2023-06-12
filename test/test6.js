function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = new User("Jack");
User.prototype.showName = function (){
    return this.name;
}
console.log(user.showName()); // Jack
