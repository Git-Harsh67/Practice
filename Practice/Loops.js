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
 
//-----------------------LOOPS QUESTION-----------------------//

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
     