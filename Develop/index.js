const inquirer = require('inquirer')
const fs = require('fs')
// const markdown = require('./generateMarkdown.js');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const readMeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
        },
    //  questions to add:  Title of project
        {
            type: 'input',
            name: 'description',
            message: 'Description of project',
        },
    // Description of project
    // Table of contents
        {
            type: 'input',
            name: 'installation',
            message: 'Steps required to install your project.',
        },
    // Installation
        {
            type: 'input',
            name: 'usage',
            message: 'Instructions and examples for use.',
        },
    // usage information
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license.',
            choices: ['Apache License 2.0', 'BSD Revised (3 clause) License',
            'FreeBSD (2 clause) License', 'GNU GPL', 'LGPL', 'MIT', 'Mozilla Public License 2.0',
            'Common Development and Distribution License', 'Eclipse Public License V2.0', 'No License/None of Above'
            ],
        },
    // License (select from list, applies badge to readme)
        {
            type: 'input',
            name: 'contribution',
            message: 'Guidelines for contributing to this project.',
        },
    // Contributing  -- contribution guidelines
        {
            type: 'input',
            name: 'tests',
            message: 'Tests for the application.',
        },
    // Tests -- test instructions
        {
            type: 'input',
            name: 'questions',
            message: 'Who and how to contact with questions.',
        }
    ])
// Questions
};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Your README.md file is complete")
//     })
// }

// TODO: Create a function to initialize app
const init = () => {
    readMeQuestions()
    .then((answers) => fs.writeFileSync('README.md', generateMarkdown(answers)))
    .then(() => console.log("Your README.md file is complete"))
    .catch((err) => console.error(err))
}

// Function call to initialize app
init();
