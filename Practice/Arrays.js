const fruits = ["mango", "apples", "kiwi", "PineApple"]
// console.log(fruits.length);
// console.log(fruits[1]);

// Arrays are mutable

const val = fruits.push("lichi")
const deleteVal = fruits.pop()
fruits.unshift("banana")
fruits.shift()
console.log(fruits)

console.log(val);
fruits.push("lichi")
console.log(fruits);
