// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */

function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

/// Add
const add = (a, b) => {
  return a + b;
};

// console.log(consume(30,2,add));

/// Multiply
const multiply = (a, b) => {
  return a * b;
};

// console.log(consume(5,5, multiply));

// Greeting
const greeting = (a, b) => {
  return `Hello ${a} ${b}, nice to meet you!`;
};
// console.log(consume('John','Doe', greeting))

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:

/// Answer: nestedFunction can Access internal because both are nested inside of a function called myFunction. Therefore myFunction is the parent of nestedFunction. So in other words closure give you access to an outer function's scope from an inner function but the inner the outer function can't access into the inner function.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
