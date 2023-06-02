const numbers = [10, 20];
let [a, b] = numbers;
console.log(a);
console.log(b);
const [first, , third] = ["foo", "bar",
    "baz"];
console.log(first);
console.log(third);

let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let { title, width, height } = options;
console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200