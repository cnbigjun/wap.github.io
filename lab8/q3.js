Array.prototype.mySort = function() {
    return this.sort((a, b) => a - b);
};
let arr = [5, 2, 1, 10, 6];
arr = arr.mySort();
console.log(arr);
