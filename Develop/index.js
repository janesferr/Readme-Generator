
// // TODO: Create a function to write README file
// DEPENDENCIES ===============================
// built in node packages
const fs = require('fs');
// npm packages
const inquirer = require('inquirer');
const path = './README.md'

// // TODO: Create a function to initialize app
function init() {
    try {
        fs.unlinkSync(path)
        //file removed
    } catch (err) {
        console.error(err)
    }
    
}

// // Function call to initialize app
init();

function printBadge(badgeName, badge) {
    // choices: ["Apache 2.0 License","BSD", "MIT", "GNU","Eclipse"],
    switch (badgeName){
        case 'Apache 2.0 License': 
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
        case 'BSD':
            badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            break;
        case 'MIT':
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
        case 'GNU':
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
        case 'Eclipse':
            badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
            break;
        default:
            badge = "Sorry, we are out of badges.";
            break;
    }
    return badge;
}

// FUNCTIONS ==================================
const writeUserInfo = ({ project, description,installation, usage, collaborators, license, features, contribute, test, username, email }) => {

const licenseBadge = printBadge(license);
                  
const newString = ` 
# Project Name: ${project} ${licenseBadge} 

In this activity, you will build a command-line tool that generates an HTML portfolio page from user input.

## Instructions

## Description 
${description}

## Table of Contents

- [Instructions](##Instructions)
- [Description](##Description)
- [Installation](##Installation)
- [Credits](##Credits)
- [License](##License)
- [Features](##Features)
- [Contributors](##Contributors)
- [Test](##Test)

## Installation 

${installation}
## Usage 

![alt text](${usage})

## Credits

${collaborators}
## License 

${license} ${licenseBadge} 

## Features
${features}

## Contributors
${contribute}

## Test

${test}

## Questions 
${username}
* You can reach me in my email: ${email}


`;
  // write it to a file
  fs.writeFile("README.md", newString, (err) => err ? console.error(err) : console.log("Success, your README.md has been created"));
}

// USER INTERACTIONS ==========================
// ask the user some questions
inquirer
  .prompt([
    // what is your name?
    {
      type: "input",
      name: "username",
      message: 'What is your Github username? ',
      validate: (value) => { if (value) { return true } else { return " I need a value to continue" } },

    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } }

    },
    {
        type: 'input',
        message: "What's the project's name?",
        name: "project",
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } }

    },
    {
        type: 'input',
        message: "Please write a short description of your project?",
        name: "description",
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } }

    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running. ',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } },
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed. ',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } },
    },
    //Credits : List your collaborators,
    {
        type: 'input',
        message: 'List your collaborators ',
        name: 'collaborators',
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } },
    },
    {
        type: 'list',
        message: "What kind of License should your project have?",
        choices: ["Apache 2.0 License","BSD", "MIT", "GNU","Eclipse"],
        name: "license",
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } },
   //Badges: https://shields.io/
    },
    //Features If your project has a lot of features, consider adding a heading called "Features" and listing them there.
    {
        type: 'input',
        message: 'List your Features if your project has a lot of features: ',
        name: 'features',
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } },
    }, 
    //Contributing: 
    //If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own.
    {
        type: 'input',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The Contributor Covenant is an industry standard, but you can always write your own. ',
        name: 'contribute',
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } },
    },   
    //Tests
    //Go the extra mile and write tests for your application. Then provide examples on how to run them. 
    {
        type: 'input',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
        name: 'test',
        validate: (value) => { if (value) { return true } else { return " I need a value to continue" } },
    },   

          
    
  ])
  .then(response => {
    writeUserInfo(response);
  })
