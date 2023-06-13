Array.prototype.even = function () {
    return this.filter(n => n % 2 === 0);
}
Array.prototype.odd = function () {
    return this.filter(n => n % 2 !== 0);
}

let arrRes1= [1, 2, 3, 4, 5, 6, 7, 8].even();
console.log(arrRes1);
let arrRes2= [1, 2, 3, 4, 5, 6, 7, 8].odd();
console.log(arrRes2);