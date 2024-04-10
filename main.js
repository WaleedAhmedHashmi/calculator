#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter 1st num", type: "number", name: "FirstNum"
    },
    {
        message: "Enter 2nd num", type: "number", name: "SecondNum"
    },
    {
        message: "Select operators to perform arthematic operations",
        name: "operators",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Divide"]
    },
]);
if (answer.operators === "Addition") {
    console.log(answer.FirstNum + answer.SecondNum);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.FirstNum - answer.SecondNum);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.FirstNum * answer.SecondNum);
}
else if (answer.operators === "Divide") {
    console.log(answer.FirstNum / answer.SecondNum);
}
else {
    console.log("Error");
}
