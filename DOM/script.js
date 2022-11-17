console.log("Hello World");

let titleDiv = document.getElementById('title');


let message = 'Goodbye World!';
let message2 = 'Hello World!';
console.log('before: ', titleDiv.innerText);    
console.log(titleDiv);
titleDiv.innerText = message;
console.log('after: ',titleDiv.innerText);

// titleDiv.innerHTML = '<h1>HELLO...!</h1>';
titleDiv.innerHTML = `<p>${message}<p>`;
titleDiv.style.backgroundColor = 'skyblue';

let redDiv = document.getElementById('red');
let yellowDiv = document.getElementById('yellow');
let greenDiv = document.getElementById('green');

// redDiv.onclick = () => console.log("You clicked the red color");
// redDiv.onclick = () => {
//     console.log("Red");
// }
// yellowDiv.onclick = () => {
//     console.log("Yellow");
// }
// greenDiv.onclick = () => {
//     console.log("Green");
// }

const squares = document.querySelectorAll('.colorSquare');
// .querySelectorAll means that it will select all the elements with the class of square

// console.log(squares);

// console.log(squares[0].value);
// console.log(squares[1].value);
// console.log(squares[2].value);


//shorter way to write the above code
const itemClicked = {'red': 0, 'yellow': 0, 'green': 0};

//this function will be called when the user clicks on any of the squares
squares.forEach(square => {
    square.onclick = () => {
        itemClicked[square.value] += 1;     //square.value is the value of the square
        square.innerText = itemClicked[square.value];   //innerText is the text inside the square
        // console.log(square.value);
    }
})

// clear scores button
function clearScore() {
        itemClicked.red = 0;
        itemClicked.yellow = 0;
        itemClicked.green = 0;
        squares.forEach(square => {
            square.innerText = 0;
        })
    
}

const clearGameDiv = document.getElementById('clearSquare');
clearGameDiv.onclick = () => {
    clearScore();
}

