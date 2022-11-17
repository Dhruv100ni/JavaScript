const howmanyletters = (phrase) => {
    
    let result = 0;
    for(const index in phrase){  //returns the index of the letter
        console.log(Number(index)+1)
        result = Number(index)+1;
    }
    // for(letter of phrase){  //returns the letter
    //     console.log(letter)
    // }
    return {result}
}

const prompt=require("prompt-sync")({sigint:true}); //importing prompt-sync
const phrase = prompt("Enter a phrase: ");
console.log(howmanyletters(phrase));



//Calculate the total sum of numbers in an array of numbers
const sumArray = (numbers) => {
    let result = 0;
    for(const number of numbers){
        result = result + number;
        console.log(result);
    }

    return {result}
}

const nums = [1, 2, 3, 4, 5, 6]
console.log(sumArray(nums))

//Find max number in an array of numbers
const maxNumber = (numbers) => {
    let result = 0;
    for(const number of numbers){
        if(number > result){
            result = number;
        }
    }
    return {result}
}


console.log(maxNumber(nums))


//Find word frequency in a string
const wordFreq = (phrase) => {
    let freq = {};
    words = phrase.split(" ");
    console.log(words);
    for(const word of words){
        if(freq[word]){
            freq[word] += 1;
        }
        else{
            freq[word] = 1;
        }
    }
    return {freq}
}

const  sentence =  prompt("Enter a sentence: ");
console.log(wordFreq(sentence))
