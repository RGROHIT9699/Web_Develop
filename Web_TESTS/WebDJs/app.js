// ----------------------------------------------------------------------
// [1]
function greet() {
    let greeting = 'Hello';
    function greetInner(n) {
      console.log(greeting + ', ' + n + '!');
    }
    return greetInner('Alice');
}
let greetFunc = greet();
greetFunc('Alice');

// ----------------------------------------------------------
// [2]
function outerFunction() {
    console.log(outerVar());
    var outerVar = "I'm in the outer function";
    function innerFunction() {
          console.log(outerVar);
    }
    innerFunction()
}
var innerFunc = outerFunction();
innerFunc();