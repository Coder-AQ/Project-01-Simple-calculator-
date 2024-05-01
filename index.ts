#! /usr/bin/env node

//SHABANG      "shabang" : unknown word.

import inquirer  from "inquirer";

const answer = await inquirer.prompt([
    
    {message: "enter your first number", type: "number",name:"firstnumber"},
    {message: "enter your second number", type: 
    "number",name:"secondnumber"},
    {message: "select one of the operator",
     type: "list",
     name:"operator"
     ,choices:["ADDITION","SUBTRACTION","DIVISION","MULTIPLICATION"]},

]);

if(answer.operator === "ADDITION" ){
      console.log( answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "SUBTRACTION"){
    console.log(answer.firstnumber-answer.secondnumber);
}
else if (answer.operator === "DIVISION"){
    console.log(answer.firstnumber/answer.secondnumber);
}   
else if (answer.operator === "MULTIPLICATION"){
    console.log(answer.firstnumber*answer.secondnumber);
}   
else{
    console.log("please select valid operator")
}

console.log("THE END")
