let x=1;
function foo(y){
    return function (z){
        return x+y+z;
    }
}
let f=foo(2);
console.dir(f);
let res=f(5);
console.log(res);