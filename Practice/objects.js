// 1st method ------------>

const user = {
    name : "Harsh",
    "full name" : "Harsh arya",
    age : 19, 
    email : "harsharyagmail.com",
    isStudent: true,
}

// console.log(user);

// access 
 
// 1 dot notation method 
// console.log(user.name);
// console.log(user.age);
// console.log(user.age);

// 2 Square bracket notation method 

// console.log(user["name"]);
// console.log(user["full name"]);
 
// Add new key 

// user.isMarried = false
// user.age = 20
// user.email = "harhar@gmail.com" // can modify by this

// console.log(user);


// 2nd method ------------>

const instaUser = new Object();

instaUser.age = 23;
instaUser.name = "harsh";
instaUser.email = "harsh@gmail.com";

// console.log(instaUser);

// Object.freeze(instaUser) // use to stop any modification
// instaUser.name = "hahah"

// Object.seal(instaUser)
// instaUser.id = 24384 // can not add any new details
// instaUser.age = 21 // but can modify 



// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));
// console.log(Object.hasOwnProperty(""));//---------------????

const obj1 = {
    a: 2,
    b: 3,
}
const obj2 = {
    c: 3,
    d: 2,
}

// const mergerObj = Object.assign({}, obj1 ,obj2  ) // don't use this
//  const mergerObj = {...obj1, ...obj2}            // mostly use 

// console.log(mergerObj);

// Object destructuring

const fullStack = {
    fullStackTrainer : "Hargsdfg--",
};

// const {fullStackTrainer : trainer} = fullStack
// console.log(trainer);
console.log(fullStack.fullStackTrainer);
