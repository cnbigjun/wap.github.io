
function f() {

}

function g() {


    return f;
}


let x = 1;
function foo(y) {
    return function (z) {
        return x + y + z;
    }
}

let res = foo(10)(20);
console.log(res)