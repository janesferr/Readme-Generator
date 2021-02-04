//node modules
const inquirer = require('inquirer');
const fs = require('fs');

//inquirer to generate questions
inquirer
    .prompt([
       {
        type: 'input',
        message: 'What is your Github username? ',
        name: 'username',         
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}},

       },
       {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}}

    },
    {
        type: 'input',
        message: "What's the project's name?",
        name: "project",
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}}

    },
    {
        type: 'input',
        message: "Please write a short description of your project?",
        name: "description",
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}}

    },
    {
        type: 'list',
        message: "What kind of License should your project have?",
        choices: ["BSD", "MIT", "GPL"],
        name: "license",
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}},

    },
   ])
   .then((response) => {
    const newString = ` # ${response.project}\n + ## Description \n ${response.description}\n + ## License \n ${response.license}\n`;
    fs.appendFile('README.md', `${newString}\n`, (err) =>
    err ? console.error(err): console.log('Commit logged!')
    );
    });