function test(){
  console.log("Testing");
}
// test();


//task 1. Implement a function that outputs all even integers between 2 and 100.
function evenIntegers() {
  for (let i = 2; i <= 100; i++) {  //i=i+1, i +=2 i=i+2
  if (i % 2 === 0) {
    console.log (i);
  }
}
}
 // evenIntegers();

 //task 2. Implement a function that outputs all integers from 1 to a number given as argument.
function printNumbers (howMany){
  for (let i = 1; i <= howMany; i++){
    console.log (i);
  }
}
// printNumbers (9);


//task 3. Implement a function that outputs all integers from a number given as argument to another number given as argument.
function printNumbers1 (howMany1, howMany2){
  for (let i = howMany1; i <= howMany2; i++){
    console.log (i);
  }
}
// printNumbers1 (2,6);


//task 4. Implement function printStars()that outputs a given number of stars and a linebreak. For example, printStars(9) outputs: *********
function printStars(number) {
  let line = "";
  for (let i = 0; i < number; i++) {
    line = line + "*";
  }
  console.log(line);
  return line;
}
// printStars(9);


//task 5. Implement function printSquare(sideLength)j that prints a square using the printStarsfunction. For example, call printSquare(4) outputs: 4 stars*4lines
function printSquare(size) {
  let line = "";
  for (let i = 0; i < size; i++){
    line = line + printStars(size);
  }
}
// printSquare(4);


//task 6. Implement function printRectangle(width, height)j that prints a rectangle using the printStars  function. For example, call printRectangle(17,3) outputs: 3 lines, 17 stars each line
function printRectangle(width, height) {
  let line = "";
  for (let i = 0; i < height; i++) {
    line = line + printStars (width);
  }
}
// printRectangle(17,3);


//task 7. Implement function printTriangle(size) that prints a rectangle using the printStarsfunction. For example, call printTriangle(5) outputs a rectangle.
function printTriangle(length) {  // length has the number of lines the triangle should have
  let line = "";
  for (let i = 1; i <= length; i++) { //for the number of lines

      printStars(i);

    line+="\n"; // Add a newline after finishing printing the line and move to the next line in the outer for loop
  }
  return line + "\n";   // Print an additional newline "\n" if desired.
}
// printTriangle(9);


//task 8. Implement function seriesSum(n) that returns the sum 1+2+3+...+n where n is an integer given as argument. Output the sum of integers from 1 to 100.

function seriesSum(n) {
  let sum = 0;
   for (let i = 1; i <= n; i++) {
     sum += i;
   }
   console.log (sum);
 }

// seriesSum(100);

//task 9. Implement function factorial(n)j that return the factorial of integer n. The formula for factorial is n! = 1*2*3*...*n. Additionally, it is defined that the factorial of 0 is 1, that is 0! = 1. Output the factorial of integer 10.

function factorial(n){
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial = factorial * i; // // multiply each number between 1 and num
}
console.log(factorial);
}
// factorial(10);

//Bonus 11.Implement a recursive function that returns the sum of a series of integers.
function factorial1(n){
  if (n == 0) {
    return 1;
  } else {
return n * factorial1(n-1);
  }
}


//task 10. Implement a function that outputs heading texts. Then implement a function that calls all the functions above and adds heading texts for each exercise output.
//
function heading(text){
  console.log(text)
  let line = "";
  for (let i = 0; i < text.length; i++){
line = line + "*";
}
  console.log(line);
}


function run(){
  heading ("Task 1. Implement a function that outputs all even integers between 2 and 100.");
  evenIntegers();
  heading ("Task 2. Implement a function that outputs all integers from 1 to a number given as argument.");
  printNumbers(9);
  heading ("Task 3. Implement a function that outputs all integers from a number given as argument to another number given as argument.");
  printNumbers1(2,6);
  heading ("Task 4. Implement function printStars()that outputs a given number of stars and a linebreak. For example, printStars(9) outputs: *********");
  printStars(9);
  heading ("Task 5. Implement function printSquare(sideLength)j that prints a square using the printStarsfunction. For example, call printSquare(4) outputs: 4 stars*4lines");
  printSquare(4);
  heading ("Task 6. Implement function printRectangle(width, height)j that prints a rectangle using the printStars  function. For example, call printRectangle(17,3) outputs: 3 lines, 17 stars each line");
  printRectangle(17,3);
  heading ("Task 7. Implement function printTriangle(size) that prints a rectangle using the printStarsfunction. For example, call printTriangle(5) outputs a rectangle.");
  printTriangle(9);
  heading ("Task 8. Implement function seriesSum(n) that returns the sum 1+2+3+...+n where n is an integer given as argument. Output the sum of integers from 1 to 100.");
  seriesSum(100);
  heading ("Task 9. Implement function factorial(n)j that return the factorial of integer n. The formula for factorial is n! = 1*2*3*...*n.");
  factorial(10);
}
run();
