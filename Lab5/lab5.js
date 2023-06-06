function sum(arr) {
    return arr.filter(num => num > 20).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

let arr = [21,1,22,23]
console.log(sum(arr))

const getNewArray = function(arr) {
    return arr.filter(str=>str.length >= 5 && str.includes('a'));
}

let strArray=['aaaaa','aa','bbbbb']
console.log(getNewArray(strArray))