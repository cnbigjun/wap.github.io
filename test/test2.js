const user = {
    fname: 'Josh',
    greet: function () {
        const setName = (fname) => {
            this.fname = fname;
        }
        setName('Edward');
    }
}
user.greet();
console.log(user.fname);  // "Edward"
