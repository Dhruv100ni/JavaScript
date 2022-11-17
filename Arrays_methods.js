//Higher order functions
//A higher order function is a function that takes another function as an argument or returns a function as a result.
//map, filter, reduce, etc

//Map
const doubleMap = (numbers) => {
    return numbers.map(number => number * 2);
}

arr = [1, 2, 3, 4, 5, 6];
let result = doubleMap(arr);
// let result = [1, 2, 3, 4, 5, 6].map(number => number * 2);
console.log(result);

//Filter
const filterEven = (numbers) => {
    return numbers.filter(number => number % 2 === 0); 
    //=== is a strict equality operator that returns true if the operands are equal and of the same type.
    //It returns false if the operands are not equal or not of the same type.
}

console.log(filterEven(arr));

const actors = [
    {name: 'Tom Cruise', netWorth: 900},
    {name: 'Dwayne Johnson', netWorth: 800},
    {name: 'Robert Downey Jr', netWorth: 500},
]

let richActor = actors.filter(actor => actor.netWorth > 600);
console.log(richActor);


//Reduce
//It takes an array and reduces it to a single value.
//It takes two arguments, a callback function and an initial value.

const sum = (numbers) => {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sum(arr));