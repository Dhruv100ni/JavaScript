const sumArrow2 = (a, b) => a + b;

const groceries = ["apple", "banana", "orange"]
console.log(groceries);
console.log(groceries[0]);
groceries.push("pear");
console.log(groceries.slice(1, 3));
console.log(groceries.indexOf("banana"));
console.log(groceries.length);

//OBJECTS
/*Objects are a way to store data in a structured way. 
They are a collection of properties. 
Each property has a key and a value. 
The key is a string and the value can be any data type.*/

const person = {
    name: "John",
    age: 30,
    hobbies: ["music", "movies", "sports"],
}

console.log(person);
console.log(person.name);
console.log(person["name"]); //another way to access the value of a key
console.log(person.hobbies[1]);
console.log(person.address); //undefined
person.email = "john@gmail.com";
person["address"] = "123 Main St";
console.log(person);

const introducer = (name, age) => {
    const person = {
        name: name,
        age: age,
    }

    const intro = `Hi, my name is ${name} and I am ${age} years old.`
    return intro;
}

console.log(introducer("John", 30));