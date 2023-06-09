let x = 1;
function foo(y){
    return function (y){
        return x+y;
    }
}