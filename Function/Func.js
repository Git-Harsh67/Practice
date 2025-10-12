// wap to find cube of any number?


// function cube(num) {
//     return num*num*num

// }
// console.log(cube(3));

// Q-1 check if a number is odd or even?

// function number(num){
//     if(num%2!==0) {
//         console.log("odd");

//     } else {
//         console.log("even");
//     }
// }
// number(2)

// Q-2 find the sum of all numbers in an array using functions. 

// function sumOfArray(array){
//     let sum= 0
//     for (let i = 0; i<array.length; i++)
//         sum+=array[i]

//     console.log(sum);
// }
// sumOfArray([1,2,3])

// Q-3 Count the number of vowels in a string using functions?

// function numberOfVowels(str){
//     sum = 0
// for (let i = 0; i<str.length-1; i++){
//     if(str[i]=="A" || str[i]=="a" || str[i]=="I" || str[i]=="i" || str[i]=="O" || str[i]=="o" || str[i]=="U" || str[i]=="u" || str[i]=="E" || str[i]=="e"){
//         sum+=str[i].length
//     }
// }
// console.log(sum);
// }
// numberOfVowels("saAiih")


// 2
function countVowels(str){
    let vowels = "aeiouAEIOU"
    let count = 0

    for (let i = 0 ; i< str.length; i++){
        if (vowels.includes(str[i]))
            count++;
    }
}
console.log(count);

countVowels("harsh")

// Q-4 Reverse a string without using built-in methods?

// function reverseString(str){
//    let reverse =""
// for (let i = str.length-1 ; i>=0 ;i--){

//     reverse+= str[i]
// }
// console.log(reverse);
// }
// reverseString("harsh")

// Q-5 Find the largest number in an array using function?

function largestNumberInArray(array) {
    let maxNum = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i]
        }
    }
    console.log(maxNum);
}
// largestNumberInArray([222,40,2,5])

// Q-6 Find the negative number in an array using function?

// function negativeNumber(array) {

//     for (let i = 0; i < array.length; i++) {

//         if (array[i] < 0) {
//             console.log(array[i]);
//         }
//     }
// }
// negativeNumber([-1,3,2,-4,2])

// Q-7 check if a string is a Palindrome using function

// function checkPalindrome(str) {
//     let reversedStr = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i]
//     }
//     // console.log(reversedStr);

//     if (str == reversedStr) {
//         console.log("True");
//     }
//     else {
//         console.log("False");
//     }

// }

// checkPalindrome("maams")

// Q-8  create a function that returns the factorial of a number?

// function factorialOfNumber(number){

//     let factorial = 1

//     for (let i = 1; i<=number ; i++ ){
//         factorial*=i  
//     }
//     console.log(factorial);
// }
// factorialOfNumber(4)

// Q-9 Create a function to count how many times a value appears in an array?

function ValueCountOfArray(array){
    let sum = 0
    for( let i = 0 ; i<=array.length-1 ; i++){

        if (array[i] === 2){
            sum+=array[i].length 
        }
        console.log(sum);
    }
} 
ValueCountOfArray([1,2,3,3,1,1,4,2,2,2])
//1=3
//2=4
//3=2
//4=1