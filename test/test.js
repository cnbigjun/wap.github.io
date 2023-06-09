const user={
    fname:'Josh',
    greet:function (){
        function setName(fname){
            this.fname = fname;
        }
        let bindName = setName.bind(this);
        bindName('Edward');
    }
}
user.greet();
console.log(user.fname);