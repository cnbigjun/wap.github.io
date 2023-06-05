// function b() {
//
//     const y = 30;
//     a();
//     function a() {
//         console.log(x, y);
//     }
//     var x = 10;
//     console.log(x, y);
// }
// const x = 20;
// var y = 40;
// b();
answer :
undefined,30
10,30


// function foo(x) {
//     let m;
//     console.log(x, y);
//     if(x > 5){
//         var y = 5;
//         m = x + y;
//     } else {
//         let z = 10;
//         m = z;
//     }
//     x = m;
//     console.log(x, y);
// }
// var x = 10;
// foo(3);
// console.log(x);
answer :
3,undefined
10,undefined
10

function printNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

printNumbers(100,2000);