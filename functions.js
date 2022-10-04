//Functions are a way to group code together to perform a specific task.
function calculateArea(width, height) {
    var area = width * height;
    console.log(area);
}

calculateArea(30, 20);

//Function arguments are the values received by the function when it is invoked., they only live inside the function. cannot be accessed outside the function.


function sayMyName(name) {
    console.log(name);
}

function greeting(name) {
    // console.log("Hello " + name);
    //`` backticks are used to create a template literal, ${} is used to insert a variable into a string.
    greet = `Hello ${name}`;
    console.log(greet);
}

greeting("John");