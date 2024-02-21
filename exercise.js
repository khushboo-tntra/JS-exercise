"use strict";

//Exercise 1 - Declare two variables First Name, Last Name and concatenate them.

// let firstName = "Khushboo";
// let lastName = "Talreja";
// console.log(`FirstName = ${firstName} and LastName = ${lastName}`);



//Exerise 2 - What is the output of the script

// const value = ("not a number")/2
// console.log(value)//NaN



//Exercise 3 - Declare two variables of type number and perform addition, subtraction, multiplication, division, remainder, and exponentiation operations.

// let num1 = 2;
// let num2 = 4;

// const add = () => {let addResult = num1 + num2;console.log(addResult);};
// const sub = () => {let subResult = num1 - num2;console.log(subResult);};
// const mul = () => {let mulResult = num1 * num2;console.log(mulResult);};
// const div = () => {let divResult = num1 / num2;console.log(divResult);};
// const rem = () => {let remResult = num1 % num2;console.log(remResult);};
// const exp = () => {let expResult = num1 ** num2;console.log(expResult);};
// add();
// sub();
// mul();
// div();
// rem();
// exp();



//Exercise 4 - What is the output of the following scripts

// alert(2 + 2 + '1' ); //41
// alert("my" + "string");//mystring
// alert( 6 - '2' );//4



//Exercise 5 - let a = ‘2’ , b = ‘3’
// How to add these two numbers using + unary form.

// let a = '2' , b = '3';
// console.log((+'2') + (+'3'));



//Exercise 6 - What will be the value of x?
// let a = prompt("First number?", 1);
// let b = prompt("Second number?", 2);
// let x = a + b;
// console.log(x);



//Exercise 7 - What will the console output be when evaluating the expression console.log('First' > 'Second')?

// console.log('First' > 'Second') //false



//Exercise 8 - Create a program that, upon receiving two input numbers, identifies the larger number and determines whether each of them is even or odd

// const identityfyNum = (num1, num2) => {
//     let greaterNum = (num1 > num2 ? `${num1} is greater` : `${num2} is greater`);
//     console.log(greaterNum);
//     (num1 % 2 === 0 ? `${num1} is even` : `${num1} is odd`);
//     (num2 % 2 === 0 ? `${num2} is even` : `${num2} is odd`);
// }
//identityfyNum();



//Exercise 9 -  Write a program for a shopping cart that applies a discount based on the total purchase amount. Use logical operators to check different conditions for applying discounts

// let totalPurchaseAmount = 10000;

// if(totalPurchaseAmount > 5000){
//     console.log("apply discount of 25%");
// }else if(totalPurchaseAmount >= 7000){
//     console.log("apply discount of 40%");
// }



//Exercise 10 - Write a function called ‘sumOfArray’ that takes an array of numbers as a parameter and returns the sum of all those numbers

// let arr = [10,12,13,15,16,17];
// let sum = 0;
// const sumOfArray = (value) => {
//     for(let val of value){
//         sum += val;
//     }
//     console.log(sum);
// }

// sumOfArray(arr);



//Exercise 11 - Write a function ‘square’ that takes  a number as a parameter and returns its square

// const square = (num) => {
//     let sq = num*num;
//     console.log(sq);
// }

// square(2);



//Exercise 12 - Create an object called ‘Person’ with properties like name, age, and address

// const Person = {
//     name: "Khushboo",
//     age: 25,
//     address: "Udaipur, Rajsthan"
// }

// console.log(`Person's name is ${Person.name}, Person's age is ${Person.age}, Person's address is ${Person.address}`);