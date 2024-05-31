#! /usr/bin/env node
import inquirer from "inquirer";
//get user input
let userInput = await inquirer.prompt([
    {
        name: "num1",
        type: "number",
        message: "Enter your first number: " // first number input
    },
    {
        name: "num2",
        type: "number",
        message: "Enter your second number: " //second number input
    },
    {
        name: "operation",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"] //opertion to be performed
    }
]);
//create a function which takes 2 number and 1 string as arguments and return resulting number
function calculate(num1, num2, operation) {
    switch (operation) {
        case "Addition":
            return num1 + num2;
        case "Subtraction":
            return num1 - num2;
        case "Multiplication":
            return num1 * num2;
        case "Division":
            return num1 / num2;
        default:
            break;
    }
}
let result = calculate(userInput.num1, userInput.num2, userInput.operation); //call the function and store result in a variable
console.log(`Answer is ${result}.`); // print result
