// Problem 1: Factorial Calculation
// Write a function calculateFactorial that takes a positive integer as input and returns its factorial. Ensure that the function handles invalid inputs gracefully.
// Example:
// console.log(calculateFactorial(5)); // Expected Output: 120
function calculateFactorial(n){
    if (n==0 | n==1){
        return 1
    }
    else{
        return n*calculateFactorial(n-1)
    }
}
console.log(calculateFactorial(5))
// Problem 2: Prime Number Checker
// Implement a function isPrime that takes a positive integer as input and returns true if the number is prime, and false otherwise. Utilize logical operators and looping constructs efficiently.
// Example:
// console.log(isPrime(7)); // Expected Output: true
// console.log(isPrime(10)); // Expected Output: false
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// Example usage:
console.log(isPrime(7));
console.log(isPrime(10));

// Problem 3: Longest Palindrome in Array
// Write a function findLongestPalindrome that takes an array of strings as input and returns the longest palindrome string found in the array. If no palindrome is found, return an appropriate message.
// Example:
// var strings = ["level", "noon", "hello", "racecar", "JavaScript"];
// console.log(findLongestPalindrome(strings)); // Expected Output: "racecar"
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

function findLongestPalindrome(arr) {
    let longestPalindrome = '';
    
    for (let str of arr) {
        if (isPalindrome(str) && str.length > longestPalindrome.length) {
            longestPalindrome = str;
        }
    }
    
    return longestPalindrome || "No palindrome found";
}

// Example usage:
var strings = ["level", "noon", "hello", "racecar", "JavaScript"];
console.log(findLongestPalindrome(strings)); // Expected Output: "racecar"


// Problem 4: Unique Characters Counter
// Create a function countUniqueCharacters that takes a string as input and returns the count of unique characters present in the string. Ignore case sensitivity while counting.
// Example:
// console.log(countUniqueCharacters("Hello World")); // Expected Output: 7 (H, e, l, o, W, r, d)

function countUniqueCharacters(str) {
    const uniqueChars = new Set();
    const lowerCaseStr = str.toLowerCase();
    
    for (let char of lowerCaseStr) {
        if (char !== ' ') {
            uniqueChars.add(char);
        }
    }
    
    return uniqueChars.size;
}

// Example usage:
console.log(countUniqueCharacters("Hello World")); // Expected Output: 7 (H, e, l, o, W, r, d)


