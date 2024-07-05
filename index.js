#! /usr/bin/env node

import inquirer from "inquirer";
//a package for getting prompt from user
console.log("\n\tWellcome Friends \ CLI Simple Calculator\n");
let answers = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstnumber" },
    { message: "Enter your second number", type: "number", name: "secondnumber" },
    {
        message: "select any one operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    }
]);
if (answers.operator === "addition") {
    console.log(answers.firstnumber + answers.secondnumber);
}
else if (answers.operator === "subtraction") {
    console.log(answers.firstnumber - answers.secondnumber);
}
else if (answers.operator === "multiplication") {
    console.log(answers.firstnumber * answers.secondnumber);
}
else if (answers.operator === "division") {
    console.log(answers.firstnumber / answers.secondnumber);
}
else {
    console.log("invalid input");
}
