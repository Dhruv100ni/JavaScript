// console.log('Hello, World!');
// console.log(1 + 1);
// //Variable
// sentence = "How are you doing today?";
// console.log(sentence);

// //Operators
// food = 20;
// tipPercentage = 0.2;
// tipAmount = food * tipPercentage;
// console.log(tipAmount);

// //User Input
// //prompt is a function that takes in a string and returns a string
// const prompt=require("prompt-sync")({sigint:true}); //importing prompt-sync
// fruit = prompt('What is your favorite fruit?')
// console.log("You said " + fruit)

//Conditionals
const prompt=require("prompt-sync")({sigint:true}); //importing prompt-sync
let weather = prompt("What is the weather like today?");
if (weather === "rainy") {
    console.log("Remember to bring an umbrella.");
} else {
    console.log("Leave your umbrella at home.");
}