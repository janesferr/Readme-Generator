//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions
inquirer.prompt{
   [
       {
           type: 'input',
           message = "What's the project title?",
           name: "title",
           validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}}

       },
       {
        type: 'input',
        message = "What's the project title?",
        name: "title",
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}}

    },
    {
        type: 'input',
        message = "What's the project title?",
        name: "title",
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}}

    },
    {
        type: 'input',
        message = "What's the project title?",
        name: "title",
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}}

    },
    {
        type: 'input',
        message = "What's the project title?",
        name: "title",
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}}

    }
   ]
   ),then({

   })

   ]
}