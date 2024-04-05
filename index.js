#!/usr/bin/env node
import inquirer from "inquirer";
//  1) Computer Will generate a random number Done
//  2) User input for guessing number         Done
//  3) Computer user input with Computer generated number and show results  Done
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a number between 1-6",
    }
]);
if (answers.userGussedNumber === randomNumber) {
    console.log("congratulations! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
