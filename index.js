const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of this project?',
            name: 'title',
        },
        {   
            type: 'input',
            message: 'Enter a description of this project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Provide steps needed to install this application.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How would a user run this application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List any other contributors on this project.',
            name: 'contributors',
        },
        {
            type: 'input',
            message: 'What are the test instructions for this application?',
            name: 'test',
        },
        {
            type: 'list',
            message: 'What license was used for this application?',
            name: 'license',
            choices: ['None', 'GNU General v2', 'Apache license 2.0', 'MIT','IBM', 'Open Data'],
          },
          {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
          },
          {
            type: "input",
            name: "email",
            message: "What is your email address?",
          }
    ]);


const generateREADME = (answers) =>

