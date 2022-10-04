const prompt=require("prompt-sync")({sigint:true}); //importing prompt-sync
let weather = prompt("What is the weather like today?");
if (weather === "rainy") {
    console.log("Remember to bring an umbrella.");
} else {
    console.log("Leave your umbrella at home.");
}