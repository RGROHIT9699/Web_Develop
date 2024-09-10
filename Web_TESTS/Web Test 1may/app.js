// [1] Create a closure that increments a counter every time it's invoked and returns the current count
const counter1 = (function() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
})();
console.log(counter1());
console.log(counter1());
console.log(counter1());

// [2] Implement a class called Person with properties name and age , and a method greet that returns a greeting message including the person's name.
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    greet() {
      return `Hello, ${this.name}!`;
    }
}
let r1 = new Person('Rohit', 20);
console.log(r1.greet());


// [3] Write a function calculateArea that calculates the area of a rectangle given its length and width using arrow functions.
const calculateArea = (length, width) => length * width;
console.log(calculateArea(5,10));


// [4]Create an object using the constructor function with a method that logs a message containing the value of this .
const obj = new function() {
    this.msg = 'Hello, world!';
    this.logMsg = function() {
      console.log(this.msg);
    }
};
obj.logMsg();


// [5] Use prototypal inheritance to create a Student class that inherits from the Person class (from question 2) and adds a new property grade.
class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
}
let r2 = new Student('Rohit', 20,'A');
console.log(r2);




//    TASK:2--------------------------------------------------------------------------------------------------
// Given the following code snippets, identify and fix the errors:

// [1]
// function outer() {
//     var x = 10;
//     function inner() {
//            console.log(x);
//     }
//     inner();
//     }
//     outer();
    //Output: undefined

function outer() {
    var x;
    function inner() {
      console.log(x);
    }
    inner();
}
outer(); // undefined



// [2] 
// function createCounter() {
//  let count;
//  return function() {
//  return count++;
//  };
//  }
//  let counter = createCounter();
//  counter());
//  console.log(counter());
//  //Output:  1
//  //  2
function createCounter() {
    let count=0;
    return function() {
        return count++;
    };
}
let counter = createCounter();
counter(); 
console.log(counter()); //1
console.log(counter()); //2