/*
// ARROW FUNCTION

// arrow function is the super hero of functions that was introduced in es6
// which makes it faster to write functions!

const calcAgeOld = function (birthYear) {
    return 2020 - birthYear;
}
// function expression

const calcAge = birthYear => 2020 - birthYear;
// simplest form of arrow function
// and a special form its still an expression
// we do not need to write the return keyword
// later on you will see how this will be extremly helpful in certain situiations

const age = calcAge(1985);
console.log(age);

// lets calculate how many years a person has left until retirement
// we need more code and therefore back to use code block
const yearUnitlRetirement = (birthYear) => {
    const age = 2020 - birthYear;
    const retirement = 65 - age;
    return retirement;
    // we also need to write the return keyword to get tha value out of the function
}

const yearRetirement = yearUnitlRetirement(1985);
console.log(`You have ${yearRetirement} until you retire`);

// if more than one line of code we need code block
// what if we have more parameters?
// const yearUntilRetirement = (birthYear, firstName) => {}
// if you have more parameters you simply seperate them by a comma, just like we did before
// when u add more lines of code and more parameter it gets more complex
// and you loose the advantage of arrow functions
// so what to use? 
// should i use arrow funtions everywhere?=
// no because arrow functons doesnt have the keyword this, and you will learn why we should use this
// sometimes if you look further down 

// FUNCTIONS CALLING ITHER FUNCTIONS

// having a function calling another function is common and something
// a developer do all the time
// but as a beginner you can struggle to understand this logic
// to illustrate functions calling another function lets go back to the food processor

// we recieved a certain number of apples and oranges and based on that produced and returned
// a juice to us
// but lets consider that the processor can only produce juice from smaller pieces of fruit
// so we first need a machine that cuts the fruit into smaller pieces!

function cutFruitMachine(fruit) {
    return fruit * 4;
    // so 1 fruit return 4 pieces
}

function fruitProcessor(apples, oranges) {
    const applesPieces = cutFruitMachine(apples);
    const orangePieces = cutFruitMachine(oranges);
    // and now we called for another function inside a function

    const juice = `Juice with ${applesPieces} apples and ${orangePieces} oranges`;
    return juice;
}

console.log(fruitProcessor(2, 3));
// this will now call the cutFruitMachine twice

// why not simply multiply both input with 4 and call it a day?
// well we could...
// the point is that its very common that one function calls another function
// and this is also to illustrate the DRY principle
// for example imagine that the cutting machine would cut in 3 pieces instead 4
// we would have to change it and if we wanted any other amount of pieces we would have to change
// now we can change inside the function and it changes everywhere

// OBJECTS

const helenaOld = {
  firstName: "Helena",
  lastName: "Johansson",
  age: 2020 - 1985,
  job: "developer",
};

// lets also learn to use dot and bracket notation to add new props to the object
helenaOld.location = "Falköping";
helenaOld["website"] = "klarr.se";
console.log(helenaOld);

// small challenge!
// write a sentence in a dynamic way
// "Helena has 3 dogs, and her youngest dog is called Doris";
// do not hard code! get the value from the object
// this is hard so i do not expect you to solve it, but try to think how we can solve it
// hint: need to use multiple dots to get the number of dogs

// solution
//console.log(
//  `${helena.firstName} has ${helena.dog.length} dogs, and her youngest dog is called ${helena.dog[2]}`
//);
// first one is simple, next one we use dot length to get how many elements in the array and the
// last one we choose which element we want in the array and remember that arrays starta t 0
// the dot here is an operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// dot member access and brackets computed
// they have high priority and they execute left to right
// no magic there is actually rules
// you do not have to memorize this it will come natural to you with more experience


// we learned that object just like arrays can hold different data like arrays and also
// different objects
// functions are just another typ of value and if its a value
// that means we can create a key value pair that is a function
// and we can then create a function that is an object

const helena = {
    firstName: "Helena",
    lastName: "Johansson",
    birthYear: 1985,
    job: "developer",
    dog: ["Tore", "Clementine", "Doris"],
    hasDriversLicense: true,

    //calcAge: function (birthYear) {
        //return 2020 - birthYear;
    /},
    // not using the dry principle
    // if we know thet birth year we should not use it again
    // we can access this because of the special variable THIS

    calcAge: function () {
        //console.log(this);
        return 2020 - this.birthYear;
    },

    // similar to a relgular function expression
    // calcAge is not a variable its now a property
    // using a function expression to create a method
    // declaration doesnt work we need an expression
    // think of fucntions as simply being values
    // then u can see that a methid is actually a prop
    // a prop that holds a function value

    // the object that is calling calcAge is helena
    // it meants that the this key will point at helena
    // as you can se the this keyword is the helena objects
    // and that means that this.birthyear is helenas birthyear
    // very very useful!
    // read up on this keyword
    // helena.birthYear would violate the dry principla but it does work
    // if we need to change something in the object it wont work - this is very
    // important to have in mind when developing in real life
    // can cause alot of errors

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job},
        and she has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
        // we use a turnery operator to decide if its a or no 

    }
    // we use calcAge becuase we do not know if the age prop has been called before get Summary
};
  };

console.log(helena.getSummary());
// this


// ITERATION

// if/else is a controlled structure
// there are more controlled structures
// one of them are loop

// loops are a fundemental aspect of every programming language
// they allow us to perform tests pver and over again
// for example when you go to a gym you do exercises a certain amount of times

console.log("Lifting weights repetition 1");
// here we want 10 reps and so we have to paste this 10 times
// which is not a best practice at all
// we would have to do many changes if we want to change something in one place
// alos alot of repeatin code
// instead we can create a loop
// lets implement a for loop - a loop that has a counter

for (let rep = 1; rep <= 10; rep++) {
    console.log("Lifting weights repetition 1");
}

// loop statement has 3 parts. 1 is the intial valu of the counter
// we create a variable to represent the reps and we want it to start with 1
// we seperate with a semicolon
// 2nd is the condition so the rep need to stay below or equal to 10 since
// we want to do ten reps
// it will be avaluated before every iteration of the loop
// loop will keep running as long as the condition is true
// when its false the loop will stop - the code will not execute anymore
// so when it reaches 11 it will be false
// in the 3rd part we increase the count. So we update the number in each iterartion
// if we dont do that the counter would just stay at 1 for ever
// so increase by 1 after each interation
// rep = rep + 1 => rep++
// after these 3 parts we write the code that we want to be repetaed
// lets start with 1 rep
// the ten mean it was printed 10 times even if it doesnt print ot console
// transform to a template string
// and insert the value of rep 
// and we build the string dynamically

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`)
}

// in order to not repeat your code over and over again we used a for loop
// you can start the rep with what value you want -  try with 5
// and after each iteration of the loop we increase the value with 1 - here you can have any value
// and the afterwards we update the rep counter
// and this loop keeps running while the rep value is less or equal 10 => TRUE
// when false it stops executing the code

// LOOPING ARRAYS

// most use cases of for loops is to loop through an array

const helena = [
    'Helena',
    'Johansson',
    2020 - 1985,
    'developer'
];

// lets say we want to log every element to the console individually
// i is common to use so lets use this
// and we start at 0 because arrays are 0 based
// we need to update the count by one therefor i++
// if we wuldnt use a for loop we would do like this
// console.log(helenaArray[0]) and so on...
for(let i = 0; i < 5 ; i++) {
    // one issue is that we hardcoded the length to 5
    // what happens if we add an element to the array?
    // it will not print that position..
    // we should compute this value = get it from js itself.
  for(let i = 0; i < helena.length; i++) {
  console.log(helena[i], typeof helena[i]);
     // here you can see that the array os an object
}
// but in the for loop we want to use i since that is the variable that iterates through the for loop
// so the condition we want is for the count to go up to 4
// so it should always stay below 5


// we only read values from an array
// but now lets create a new array which will contain all the types for all these elements
// might be useless but this is created for you to learn => we would not do this in real life


const types = [];
// create an empty array called types
console.log(types);

for (let i = 0; i < helena.length; i++) {
    // reading from array
    console.log(helena[i], typeof helena[i]);

    // filling array
    types[i] = typeof helena[i];
    // we can use push which is a bit cleaner
    types.push(typeof helena[i]);
}
// same way as we read data dynamically and now we create data dynamically
// this is a way of filling array
console.log(types);

//for (let i = 0; i < helena.length; i++) {
//   console.log(helena[i]);
//}
*/
