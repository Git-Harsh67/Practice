// for loop, while loop, do while loop

// 1 "for loop"
// for (initialise ; condition ; updation){ 
//     //code execute
// }
// console.log("loop started");

// for ( let i = 0 ; i <= 5 ; i++){
//     if ( i === 4){
//         continue
//     }
//     console.log("Harsh", i);

    
// }


// while loop
// let i = 30

// while (i <=5) {
//     console.log("Harsh", i);
//     i++
// }

// do-while loop

// let i = 10

//------------------------ Advanced Loops ------------------------------>

// for-of loop

// const object = "346253"
// for (const element of object) {
//     console.log(element);
    
// }

// for-in loop

// const object = {
//     name: "Harsh",
//     id : 1,
// }

const array = [ 1,2,3,4]
// for (const key in object) {
//   console.log(key);
// }
// for (const key in array) {
//   console.log(key);
// }
 
// for-each loop
// array.forEach((val, idx, array) => {
//     console.log(val);
//     console.log(idx);
//     console.log(array);
    
// })

// map method
// const mapMethod = array.map((val, idx, array) =>{
//      console.log(val);
//      return val * 2
// })
// console.log(mapMethod);

// filter method

//-----------------------------LOOPS QUESTION----------------------------------//

// Q-0 Print numbers from 1 to 10?
//  for ( let i = 1 ; i <=10 ; i++){
//     console.log(i);  
//  }

// Q-1 Print even numbers from 2 to 20? 
// for ( let i = 1 ; i<=20 ; i++){
//     if (i%2==0) {
//         console.log(i);
//     }
// }

// Q-2 Print odd number from 1 to 19?
// for ( let i = 1 ; i<=20 ; i++){
//     if (i%2==!0) {
//         console.log(i);
        
//     }
// }

// Q-3 Print numbers from 10 to 1(reverse order).?
// for ( let i = 10 ; i >=1 ; i--){
//         console.log(i);
//  }

// Q-4 print the first 10 multiples of 3?
// let num = 3
// for ( let i = 1 ; i<=10 ; i++){
    
//         // console.log("3x",i , "=" ,i*3);
//         console.log(`${num} x ${i} = ${num * i}`);
// }
 
// Q-5 Sum of numbers from 1 to 100?
// let sum = 0
//  for ( let i = 1 ; i <=100 ; i++){
//  sum = sum + i
//  }
// console.log(sum);

// Q-6 Print each character of a string?
// let str="Java"
//  for ( let i = 0 ; i <=3 ; i++){
//      console.log(str[i]);
// }
 
// Q-7 Print numbers divisible by 5 from 1 to 50?

// for ( let i = 1 ; i<=50 ; i++){
//     if (i%5==0) {
//         console.log(i);
//     }
// }

// Q-8 Find the factorial of a number(5)?

// let num = 1
//  for ( let i = 1 ; i <=5 ; i++){
//  num = num * i
//  }
// console.log(num);

// Q-9 Print numbers from 1 to 10, but skip multiples of 3 ?

// for ( let i = 1 ; i <=10 ; i++  ){
//     if (i%3!==0){
//  console.log(i);
//     } 
// }

// Q-10 print numbers 1 to 100, but replace multiples of 3 with "Fizz" and 5 with "Buzz" ?
 
// for ( let i = 1 ; i <=100 ; i++ ){
//      if (i%3==0 && i%5==0){
//  console.log("fizzBuzz");}

//  else if(i%3==0 ){
//     console.log("fizz");  
// }  
//  else if(i%5==0 ){
//     console.log("Buzz");  
// } 

// else{
//     console.log(i);  
// }
// }

// Q-11 create an array of the first 10 square numbers?

// let num = []
// for (let i =1 ; i<=10 ; i++){
//     const sq = i*i
//     num.push(sq)  
// }
// console.log(num);

// Q-12 Print the reverse of a string without using inbuilt functions ?
// let str="Java"
// let reverseStr= ""
//  for ( let i = str.length - 1 ; i >=0 ; i--){
//      reverseStr += str[i] 
//     }
//      console.log(reverseStr);
     
// Q-13a print the sum of even numbers from 1 to 50 ?

//  let sum = 0
// for ( let i = 1 ; i<=50 ; i++){
//   if(i%2==0)
//     sum +=i
// }
// console.log(sum);


// Q-13a print the sum of odd numbers from 1 to 50 ?

//  let sum = 0
// for ( let i = 1 ; i<=50 ; i++){
//   if(i%2==!0)
//     sum +=i
// }
// console.log(sum);

// Q-14 Print multiplication table of 7 in table format ?
 
// let num = 7
// for ( let i = 1 ; i<=10 ; i++){
 
//     console.log(`${num} x ${i} = ${num*i}`);
// }

// Q-18 Create an array of the first 10 odd numbers ?

// let array = []
// for ( let i = 1 ; i<=20 ; i++){

//  if (i%2!==0){
//      array.push(i)
//  }
// }
// console.log(array);

// Q-19 find the Max. number in an array ?

// let array= [1,20,5,3]

// let maxNum = array[0]

// for (let i = 0; i<array.length; i++){

//   if(array[i] > maxNum ){
//      maxNum=array[i]
// }
// }
// console.log(maxNum);


// Q-19a Find the sum of +ve number in an [2,9,-10,20,-6,19] ?

// let array = [2,9,-10,20,-6,19]
//  let sum = 0
// for ( let i = 0 ; i<array.length ; i++){

//     if(array[i] > 0) {
// sum+=array[i]
//     }

// }
// console.log(sum);

// Q-19b Find the Palindrome string. 
 
// let str = "maam"
// let firstChr= str[0]
// let lastChr= str[str.length-1]
// for(let i = 0; i<str.length; i++){
    
// if(firstChr==lastChr  ){

// console.log("True");
// }
// else{
// console.log("False");
// }
    
// }



//----------------------------------------------------------------------------------------
