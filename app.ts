#! /usr/bin/env node



import inquirer from "inquirer";
import chalk from "chalk";

// Welcome Message:
console.log(chalk.bold.yellowBright("\n \t(^___^) WELCOME TO TZ - CURRENCY_CONVERTER (^___^)\n"));

// creating a object and defining the list of currencies and their exchange rates

let exchange_rates : any = {
    "USD": 1,  // Base currency
    "EUR": 0.9, //European currency (euro)
    "JYP": 113, //Japenese currency (yen)
    "CAD": 1.3, //Canadian dollar
    "AUS": 1.65, //Australian dollar
    "PKR": 280, //Pakistani Rupees
}

//now taking input from the user and prompting the user to select currencies to convert from and to:

let user_answer = await inquirer.prompt([
    {
        name : "Converting_from",
        type : "list",
        message : chalk.blueBright("Select the Currency to convert from:"),
        choices:["USD", "EUR", "JYP", "CAD", "AUS", "PKR"],
    },
    {
        name : "Converting_to",
        type: "list",
        message: chalk.blueBright("\nSelect the Currency to convert into:"),
        choices:["USD", "EUR", "JYP", "CAD", "AUS", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message : chalk.blueBright("\nEnter the amount to convert:"),
    }
]);

// now doing the conversion of currencies by applying a formula:

//first saving our inputs in variables:
let from = exchange_rates[user_answer.Converting_from]
let to = exchange_rates[user_answer.Converting_to]
let amount = user_answer.amount

// Formula for conversion:
let base_amount = amount / from
let converted_amount = base_amount * to

//Displaying the converted amount:
console.log(chalk.greenBright(`\nConverted Amount = ${converted_amount}`));