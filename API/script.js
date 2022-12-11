console.log('Hello World');

//asynchronous programming in javascript
//asynchronous programming is a programming paradigm in which a unit of work runs separately from the main application thread and notifies the calling thread of its completion, failure, or progress.
// fetch is use for fetching data from the server
// .then is use for waiting for the data to be fetched

//It runs in the background and when the data is fetched it will notify the main thread
console.log('RUN 1st');
const dogImageDiv = document.getElementById('dogImage');
const dogButton = document.getElementById('dogButton');

//we have to use .then to wait for the data to be fetched
const getNewDogImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    // .then(json => console.log('RUN 2nd', json));
    .then(json => {
        console.log(json.message);
        dogImageDiv.innerHTML = `<img src="${json.message}" alt="dog image" height=200 width=200>`;
    })
}

dogButton.onclick = () =>  getNewDogImage();

//It will run first because it is not waiting for the data to be fetched
console.log('RUN 3rd');