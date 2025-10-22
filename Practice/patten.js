// Q-1 Triangle

// for (let i = 1; i <= 5 ; i++) {
//     let patten = ""

//     for( let j = 1 ; j <= i ; j++){
//         patten += " *"
//     }
//     console.log(patten);
    
// }

// Q-2 re-Triangle

// for ( let i = 5; i >= 1 ; i-- ){
//     let patten =""

//     for( let j = 1 ; j <= i ; j++){
//         patten += " * "
//     }
//     console.log(patten);
// }

// Q-3 
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

// for ( let i = 5; i >= 0 ; i-- ){
//     let patten =""

//     for( let j = 1 ; j <= i ; j++){
//         patten += "   "

//     }
//     for ( let k = 4 ; k >= i ; k--){
//         patten += " * "
// }
// console.log(patten);
// }

// Q-4
// *  *  *  *
// *  *  *
// *  * 
// * 

// for ( let i = 0; i <= 5 ; i++){
//     let patten =""

//     for( let j = 1 ; j <= i ; j++){
//         patten += "   "

//     }
//     for ( let k = 4 ; k >= i ; k--){
//         patten += " * "
// }
// console.log(patten);
// }

// Q-5

//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

// let row = 5;
// for (let i = 1 ; i<= 5; i++){
// let patten= ""
//     for (let j = i ; j<= row ; j++){
//     patten+="  "    
//     }
//     for (let k = 1; k<=2*i-1 ; k++){
//         patten+=" *"
//     }
//     console.log(patten); 
// }

 
// Q-6

// * * * * * * *
//   * * * * *
//     * * *
//       *

// let row = 5;
// for (let i = 5 ; i>= 1; i--){
// let patten= ""
//     for (let j = i ; j<= row ; j++){
//     patten+="  "    
//     }
//     for (let k = 1; k<=2*i-1 ; k++){
//         patten+=" *"
//     }
//     console.log(patten); 
// }

// Q-7
 
//       *
//     * * *
//   * * * * *
// * * * * * * *
//   * * * * *
//     * * *
//       *
 
// let row = 5;
// for (let i = 1 ; i<= 5; i++){
// let patten= ""
//     for (let j = i ; j<= row; j++){
//     patten+="  "    
//     }
//     for (let k = 1; k<=2*i-1 ; k++){
//         patten+=" *"
//     }
//     console.log(patten); 
// }
// for (let i = 4 ; i>= 1; i--){
// let patten= ""
//     for (let j = i ; j<= row ; j++){
//     patten+="  "    
//     }
//     for (let k = 1; k<=2*i-1 ; k++){
//         patten+=" *"
//     }
//     console.log(patten); 
// }

// Q-8 

//  * * * * *
//  *       *
//  *       *
//  *       *
//  * * * * *

// for ( let i=1 ; i <= 5; i++){
//     let patten = "" 

//     for (let j = 1 ; j<= 5; j++){

//     if (i==1 || i==5 || j==1 || j ==5){
//         patten+= " *"
//     }
//     else {
//          patten+= "  "
//     }

//     }
 
//     console.log(patten);
// }

// Q-9

//  * * * * *
//  * *   * *
//  *   *   *
//  * *   * *
//  * * * * *

for ( let i=1 ; i <= 5; i++){
    let patten = "" 

    for (let j = 1 ; j<= 5; j++){

    if (i==1 || i==5 || j==1 || j==5 || (i === j)){
        patten+= " *"
    }

    else {
         patten+= "  "
    }

    
    }
    
 
    console.log(patten);
}
