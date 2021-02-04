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
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. ',
        name: 'installation',         
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}},
       },
       {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed. ',
        name: 'usage',         
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}},
       },
       //Credits : List your collaborators,
       {
        type: 'input',
        message: 'List your collaborators ',
        name: 'collaborators',         
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}},
       },
    {
        type: 'list',
        message: "What kind of License should your project have?",
        choices: ["BSD", "MIT", "GPL"],
        name: "license",
        validate: (value) => { if(value){ return true} else{ return " I need a value to continue"}},

    },
    //Badges: https://shields.io/
    //Features If your project has a lot of features, consider adding a heading called "Features" and listing them there.
    //Contributing: 
    //If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own.
    //Tests
//Go the extra mile and write tests for your application. Then provide examples on how to run them.   
])
   .then((response) => {
    const newString = ` # ${response.project}\n + ## Description \n ${response.description}\n + ## Table of Contents \n  + ## Installation \n ${response.installation}\n + ## Usage\n ${response.usage} \n + ## Credits\n ${response.collaborators} \n + ## License \n ${response.license}\n `;
    fs.appendFile('README.md', `${newString}\n`, (err) =>
    err ? console.error(err): console.log('Commit logged!')
    );
    });