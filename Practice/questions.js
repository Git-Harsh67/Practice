// Q-1 Use logical operator to find whether the age of a person lies b/w 10 and 20 ?
// let age=19
// console.log(age>10 && age<20)

// Q-2 Check if a number is positive, negative, or zero?
// let num=0
// if (num>0 ) {
    
//     console.log("Positive");
// }
// else if (num<0) {
//     console.log("Negative");
    
// } else {
//     console.log("Zero");
    
// }

// Q-3 Check if a number is even or odd?

// let num=0

// if (num%2==0) {
//     console.log("even");
    
// }
//  else {
//     console.log("odd");   
// }

// Q-4 Check if the person is eligible to vote?
// let age=18
// if (age>0 && age<18) {
// console.log("Can not vote");
// }
// else if ( age>=18 && age<=100) {
//     console.log("Can vote");
// }
// else{
//     console.log("Invalide voter");
    
// }

// Q-5 find the largest of the two numbers?
// let num1=0
// let num2=0
// if (num1>num2) {
//     console.log("number-one is greater");
// } 
// else if (num2>num1) {
//     console.log("number-two is greater");
// }
// else{
//     console.log("both numbers are equal");
// }

// Q-6 Check if a year is a leap year?
// let year= 2024
// if ((year%4==0 && year%100!==0 ) || year%400==0 ) {
//     console.log("Leap Year");
// }
// else{
//     console.log("Not Leap Year");
// }

// Q-7 Check if a character is vowel or consonant?
// let word="r"
// if (word=="a" || word=="e" || word=="i" || word=="o" || word=="u" || word=="A" || word=="E" || word=="I" || word=="O" || word=="U") {
//     console.log("Are Vowel");
    
// } else {
//      console.log("Are Consonant");
// }

// Q-8 Check if a person is a child, teenager, or adult?
// let age=781
// if (age>0 && age<=12) {
//     console.log("Child");
// }
//  else if (age>=13 && age<=18 ){
//     console.log("Teenager");
// }
// else if (age>=19 && age<=60) {
//     console.log("Adult");
// }
// else if (age>=61 && age<=110) {
//     console.log("Senior Citizen");
// }
// else{
//     console.log("Invalide AGE"); 
// }

// Q-9 Check is a number is divisible by 5 and 11?
// let num=121
// if (num%5==0 && num!==0) {
//     console.log("Divisible by 5");
// } 
// else if (num%11==0 && num!==0) {
//     console.log("Divisible by 11");
// } 
// else {
//     console.log("Not Divisible by 5 and 11");
    
// }

// Q-10 Check if a triangle is vaild based on angles?
//  Answer-10
// let angleOne=50
// let angleTwo=50
// let angleThree=80
// if (angleOne+angleTwo+angleThree==180) {
// console.log("Is a triangle");
// }
// else {
//     console.log("Not a triangle");
// }

// Q-11 Find the grade of a student based on marks?
// Answer-11
// let marks=101
// if (marks>=101) {
//     console.log("Invalide Marks");
// } 
// else if (marks>=85 && marks<=100) {
//     console.log("Grade A");
// }
// else if (marks>=75 && marks<=84) {
//     console.log("Grade B");
// }
// else if (marks>=65 && marks<=74) {
//     console.log("Grade C");
// }
// else if (marks>=55 && marks<=64) {
//     console.log("Grade D");
// }
// else if (marks>=0 && marks<=54) {
//     console.log("Fail");
// }
// else {
//     console.log("Invalide ");
// }

// Q-12a Find the current day based on numbers?(by if else)
// Answer-12
// let day=7
// if (day==1) {
//     console.log("Sunday");
// }
// else if (day==2) {
//     console.log("Monday");
// }
// else if (day==3){
//     console.log("Tuesday");
// }

// else if (day==4){
//     console.log("Wednesday");
// }

// else if (day==5){
//     console.log("Thusday");
// }

// else if (day==6){
//     console.log("Friday");
// }

// else if (day==7){
//     console.log("Saturday");
// }
// else {
//     console.log("Invalide Day");
// }

// Q-12b Find the current day based on numbers?(by switch)
// Answer
// let day=0
// switch (day) {
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("wednesday");
//         break;
//     case 5:
//         console.log("Thusday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;

//     default:
//         console.log("Invalide Day");
//         break;
// }

// Q-13 Find the current month using switch satement?
// Answer
// let month=1
// switch (month) {
//     case 1:
//         console.log("Jan");
        
//         break;
//     case 2:
//         console.log("Feb");
        
//         break;
//     case 3:
//         console.log("mar");
        
//         break;
//     case 4:
//         console.log("April");
        
//         break;
//     case 5:
//         console.log("may");
        
//         break;
//     case 6:
//         console.log("june");
        
//         break;
//     case 7:
//         console.log("July");
        
//         break;
//     case 8:
//         console.log("Aug");
        
//         break;
//     case 9:
//         console.log("sep");
        
//         break;
//     case 10:
//         console.log("oct");
        
//         break;
//     case 11:
//         console.log("nov");
        
//         break;
//     case 12:
//         console.log("dec");
        
//         break;

//     default:
//         console.log("Invalide Day");
//         break;
// }

//  Q-14 Find the output of the two numbers based on switch statement using operator(+,-,*,/) ?
// Answer

// let number1=20
// let number2=2
// let Output="*"
// switch (Output) {
//     case "+":
//         console.log(number1+number2); 
//         break;
//     case "-":
//         console.log(number1-number2); 
//         break;
//     case "*":
//         console.log(number1*number2); 
//         break;
//     case "/":
//         console.log(number1/number2); 
//         break;

//     default:
//         break;
// }

// Q-15 Find remark based on grading system using switch statement?
// Answer
// let grade="V"
// switch (grade) {
//     case "A":
//         console.log("Excellent"); 
//         break;
//     case "B":
//         console.log("Good"); 
//         break;
//     case "C":
//         console.log("Can improve"); 
//         break;
//     case "D":
//         console.log("Have work harder"); 
//         break;
//     default:
//         console.log("Invalide grade"); 
//         break;
// }

// Q-16 Print action on traffic light system using switch statement?
// Answer
// let TrafficLight="Red"
// switch (TrafficLight) {
//     case "Green":
//         console.log("Go");
//         break;
//     case "Yellow":
//         console.log("Prepare");
//         break;
//     case "Red":
//         console.log("Stop");
//         break;

//     default:

//         break;
// }

// Q-17 Grading system?
// Answer
let number=99
switch (number) {
    case number>=85 && number<=100 :
        // console.log (number>=85 && number<=100);  
        console.log ("A");  

        break;
    case number>=75 && number<=84:
        console.log("B Grade");  
        break;
    // case (number>=65 && number<=74):
    //     console.log("C Grade");  
    //     break;
    // case (number>=45 && number<=64):
    //     console.log("A Grade");  
    //     break;
    // case (number>=0 && number<=44):
    //     console.log("Fail");  
    //     break;
    default:
        console.log("Invalide Marks");
        break;
}
