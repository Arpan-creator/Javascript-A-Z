//Using Factory Function
function AnimalFf(noOfLegs, vegetarian) {
    return {
        noOfLegs: noOfLegs,
        vegetarian: vegetarian,
        eat: function() {
            return 'eating...';
        },
        greet: function() {
            return `Hi, I have ${this.noOfLegs} legs.`;
        }
    };
}

let animal1 = AnimalFf(4, true);
console.log(animal1.eat());   
console.log(animal1.greet()); 

//Factory Function to a constructor Function
function AnimalCf(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
    this.eat = function() {
        return 'eating...';
    };
    this.greet = function() {
        return `Hi, I have ${this.noOfLegs} legs.`;
    };
}

// Example usage:
let animalCf= new AnimalCf(4, true);
console.log(animalCf.eat());   
console.log(animalCf.greet()); 

//Using ES6

class Animal {
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
    }

    eat() {
        return 'eating...';
    }

    greet() {
        return `Hi, I have ${this.noOfLegs} legs.`;
    }
}

let animal = new Animal(4, true);
console.log(animal.eat());   
console.log(animal.greet()); 



