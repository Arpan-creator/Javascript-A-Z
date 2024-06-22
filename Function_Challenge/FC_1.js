// Function with Variables: Write a function subtract that takes two numbers as parameters and returns the result of subtracting the second number from the first number. Ensure that the function only performs subtraction if both parameters are numbers.
// Example Invocation: subtract(10, 5) Expected Output: 5
function Subtract(a,b){
    return a-b
}
console.log(Subtract(10,5))

// Handling Null and Undefined: Create a function greet that takes a first name, last name, and age as parameters. The function should return a greeting string mentioning the age of the person. Utilize template literals to compose the string. Include a conditional statement to handle cases where the age might not be available (i.e., undefined).
// Example Invocation: greet("John", "Doe", 30) Expected Output: "John Doe's age is 30."
function greet(firstName, lastName, age) {
    if (age === undefined) {
        return `${firstName} ${lastName}'s age is not available.`;
    } else {
        return `${firstName} ${lastName}'s age is ${age}.`;
    }
}

// Example usage:
console.log(greet("John", "Doe", 30));  
console.log(greet("Jane", "Doe"));     


// Utilizing Template Literals: Write a function interpolate that takes two numbers as parameters and returns a string with the sum of the numbers formatted as an equation. Use logical operators to ensure that both inputs are numbers.
// Example Invocation: interpolate(5, 3) Expected Output: "5 + 3 = 8"
function interpolate(num1,num2){
    if(typeof num1=='number' && typeof num2=='number'){
        return `"${num1} + ${num2} = ${num1+num2}"`
    }
}
console.log(interpolate(5,3))