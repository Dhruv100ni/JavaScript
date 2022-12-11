//Asuncronous Programming is a way to run code in the background without blocking the main thread   
//Types of Asynchronous Programming are Callbacks, Promises, Async/Await

//Callbacks
//A callback is a function that is passed as an argument to another function and is executed after some operation has completed
//Example
// const waitingForSoup = () => {
//     console.log('waiting for soup');
// }
// console.log('I am hungry');
// setTimeout(() => console.log('soup is ready '), 2000); //This will print soup after 2 seconds
// console.log('I am still hungry');

/*
Promises:-
A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it’s not resolved 
(e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks
to handle the fulfilled value or the reason for rejection. 
*/
// //Example
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         isReady = [true, false][Math.floor(Math.random() * 2)];
//         isReady ? resolve('Soup is ready') : reject('Soup is not ready');
//     }, 4000);
// });

// promise1.then((value) => {
//     console.log(value);
// }
// ).catch((error) => {
//     console.log(error);
// });

// console.lof('fetch:',
//     fetch('https://dog.ceo/api/breeds/image/random')    //promise
//     .then(response => response.json())  //promise
//     .then(data => console.log(data))    
// )

/*
Async/Await:-
Async functions are a new way to write asynchronous code. 
They are a combination of promises and generators. 
Async functions are a way to write
promise-based code as if it were synchronous, but without blocking the execution thread.

Rules for async/await:-
1. Async functions always return a promise.
2. Await can only be used inside an async function.
3. Await can be used to wait for a promise to resolve.
4. Await can be used to wait for a promise to reject.

*/

//Example
console.log('async/await:');
const getDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random'
    const response = await fetch(url);  //await is used to wait for the promise to resolve
    const data = await response.json();
    console.log(data);
}

getDog();

console.log('async/await with try/catch:');

const getSoup = async () => {
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            isReady = [true, false][Math.floor(Math.random() * 2)];
            isReady ? resolve('Soup is ready') : reject('Soup is not ready');
        }, 4000);
    });

    const result = await promise1;
    console.log(result);
}