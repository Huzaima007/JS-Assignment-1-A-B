// -------------------Chapter 1 ALERTS-----------------

// Qusetion 1

alert("Well Come To Our Website!");

// Qusetion 2

alert("Error! Please Enter A Valid Password");

// Qusetion 3

alert("Wellcome To JS Land \n Happy Coding!");

// // Qusetion 4

alert("Wellcome To JS Land");
alert("Happy Coding");
alert("I Hope You Enjoy your Coding!");

// Qusetion 5

console.log("Hello I Can Run JS Through My Browser Console");

// Qusetion 6
// ?
// Qusetion 7
// ?

// -------------------Chapter 2 VARIABLE FOR STRING-----------------

// Qusetion 1

var username;

// Qusetion 2

var myName = "Your Full Name";

// Qusetion 3

var message = "Hello World";
alert(message);

// Qusetion 4

var name1 = "Huzaima";
var age = "15";
var certified = "Front End Web Developer";
alert(name1);
alert(age);
alert(certified);

// Qusetion 5

var Pizza = " Pizza \n Pizz \n Piz \n Pi \n P";
alert(Pizza);

// Qusetion 6

var email = "huzaima@gmail.com";
alert("My email address is " + email);

// Qusetion 7

var book = "A Smarter Way To Learn Javascript";
alert(book);

// Qusetion 8

// ?

// Qusetion 9

var designString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(designString);

// -------------------Chapter 3 VARIABLE FOR NUMBER-----------------

// Question 1

var age = 15;
alert("I Am " + age + "Years Old");

// Qusetion 2

var visit = 15;
alert("You have visited this site " + visit + " times”.");

// Qusetion 3

var birthYear = 2009;
alert("My birth year is " + birthYear);

// Qusetion 4

var visitorName = "Huzaima";
var productName = "Polo Shirt";
var quantity = 5;

console.log(
  visitorName +
    " ordered " +
    quantity +
    " " +
    productName +
    "(s) on XYZ Clothing store."
);

// -------------------Chapter 4 VARIABLE NAMES: LEGAL & ILLEGAL-----------------

// Question 1

var name1 = "Huzaima",
  dob = 2009,
  Fn = "Siddiq";
console.log(name1 + dob + Fn);

// Question 2

//   ----------------------Legal Variable Names------------------------

// name;
// age;
// totalAmount;
// isActive;
// score;

// ----------------------Illegal Variable Names------------------------

// 1stName
// user name
// var
// total-amount
// @score

// Question 3

var rules = "Rules for naming JS variables:";
var a = " Variable names can only contain: numbers, $ and _";
var b =
  " Variables must begin with a letter, $, or _. For example: $name, _name or name";
var c = " Variable names are case sensitive";
var d = " Variable names should not be JS keywords";
console.log(rules + a + b + c + d);

// -------------------Chapter 5 MATH EXPRESSION-----------------

// Question 1

var num1 = 3;
var num2 = 67;
var sum = num1 + num2;

console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);

// Question 2

// ---------------Part 1--------------
var num1 = 67;
var num2 = 3;
var subtration = num1 - num2;

console.log(
  "The subtration of " + num1 + " and " + num2 + " is: " + subtration
);

// ---------------Part 2--------------
var num1 = 67;
var num2 = 3;
var divide = num1 / num2;

console.log("The divide of " + num1 + " and " + num2 + " is: " + divide);

// ---------------Part 3--------------
var num1 = 67;
var num2 = 3;
var multiply = num1 * num2;

console.log("The multiply of " + num1 + " and " + num2 + " is: " + multiply);
// ---------------Part 4--------------
var num1 = 3;
var num2 = 67;
var modulus = num1 % num2;

console.log("The modulus of " + num1 + " and " + num2 + " is: " + modulus);

// Question 3

var num;
console.log("Value after variable declaration is: " + num);
num = 5;
console.log("Initial value: " + num);
num++;
console.log("Value after increment is: " + num);
num += 7;
console.log("Value after addition is: " + num);
num--;
console.log("Value after decrement is: " + num);
var remainder = num % 3;
console.log("The remainder is: " + remainder);

// Question 4

var ticketPrice = 600;
var totalCost = ticketPrice * 5;
console.log("Total cost to buy 5 tickets to a movies: " + totalCost + " PKR");

// Question 5

var number = 8;
for (var i = 1; i <= 10; i++) {
  console.log(number + " x " + i + " = " + number * i);
}

// Question 6

var celsius = 25;
var fahrenheit = (celsius * 9) / 5 + 32;
console.log(celsius + "°C is " + fahrenheit + "°F");

var fahrenheit2 = 92;
var celsius2 = ((fahrenheit2 - 32) * 5) / 9;
console.log(fahrenheit2 + "°F is " + celsius2 + "°C");

// Question 7

var price1 = 50;
var price2 = 30;
var qty1 = 2;
var qty2 = 3;
var shipping = 10;

var total = price1 * qty1 + price2 * qty2 + shipping;

console.log("Total Cost: $" + total);

// Question 8

var totalMarks = 500;
var marksObtained = 111;
var percentage = (marksObtained / totalMarks) * 100;
console.log("Marks Obtained: " + marksObtained + "/" + totalMarks);
console.log("Percentage: " + percentage + "%");

// Question 9
var usdToPkr = 210;
var sarToPkr = 85;

var usd = 10;
var sar = 25;
var totalPkr = usd * usdToPkr + sar * sarToPkr;
console.log("Total in Pakistani Rupees: " + totalPkr);

// Question 10

var num = 12;
var result = ((num + 5) * 10) / 2;
console.log("The result is: " + result);

// Question 11

var currentYear = 2024;
var birthYear = 2009;
var age1 = currentYear - birthYear;
var age2 = age1 - 1;
console.log("They are either " + age1 + " or " + age2 + " years old.");

// Question 12

var radius = 5;
var cir = 22;

console.log("The circumference is " + 2 * cir * radius);
console.log("The area is " + cir * radius * radius);

// Question 13

var favoriteSnack = "Chips";
var currentAge = 15;
var maxAge = 80;
var amountPerDay = 100;
var totalAmount = (maxAge - currentAge) * 365 * amountPerDay;
console.log(
  "You will need " +
    totalAmount +
    " " +
    favoriteSnack +
    " to last you until the ripe old age of " +
    maxAge +
    "."
);
