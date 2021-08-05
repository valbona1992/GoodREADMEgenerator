// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
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
            message: 'Enter the user story of this project.',
            name: 'userstory',
        },
        {
            type: 'input',
            message: 'Enter the video demo link.',
            name: 'demovideo',
            default: 'images/goodreadme.gif'
        },
        {
            type: 'input',
            message: 'Enter screenshots for the project.',
            name: 'firstscreenshot',
            default: 'images/Screenshot1.png'  
        },
        {
            type: 'input',
            message: 'Enter another screenshot for the project.',
            name: 'secondscreenshot',
            default: 'images/Screenshot2.png'  
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
            choices: ['None', 'Apache', 'MIT', 'BSD3', 'GPL'],
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
        },
    ];
    
    // TODO: Create a function to write README file
    function writeToFile(filename, answers) {
        fs.writeFileSync(filename, answers);
    }

    // TODO: Create a function to initialize app
    function init() {
        inquirer.prompt(questions).then(response => {
            writeToFile("README.md", generateMarkdown(response))
          });
    }
    
    // Function call to initialize app
    init();
