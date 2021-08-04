const inquirer = require('inquirer');
const fs = require('fs');

const createMd = (answers, badge) => 
    `
# ${answers.title} 
[license](https://img.shields.io/badge/license-${answers.badge})

## Description
${answers.description}

## Table of Contents 
  - [User Story](#userstory)
  - [Demo Video](#demovideo)
  - [Screenshots](screenshots)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributors](#contributors)
  - [Tests](#tests)
  - [Questions](#questions)

## User Story
${answers.userstory}

## Demo Video 
[link](${answers.demovideo})

## Screenshots
[Screenshot](${answers.screenshot})

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributors
${answers.contributors}

## License
License is ${answers.license} standard license.

## Tests
${answers.test}

## Questions
 GitHub: https://github.com/${answers.github}  <br/>
 Email me with any questions:: ${answers.email}
 `;


const badge = (license) => {
    switch (license) {
        case 'Apache license 2.0':
            response = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        case 'MIT':
            response = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
        case 'IBM':
            response = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
            break;
        case 'Open Data':
            response = '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'
            break;
        case 'None':
            response = ' '
            break;
        default:
            response = ' '
            break;
    }
    return response;
};

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
            message: 'Enter the user story of this project.',
            name: 'userstory',
        },
        {
            type: 'input',
            message: 'Enter the video demo link.',
            name: 'demovideo',
        },
        {
            type: 'input',
            message: 'Enter screenshots for the project.',
            name: 'firstscreenshot',
            default: 'info'  // put link here 
        },
        {
            type: 'input',
            message: 'Enter another screenshot for the project.',
            name: 'secondscreenshot',
            default: 'info'  // put link here 
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
            choices: ['None', 'Apache license 2.0', 'MIT', 'IBM', 'Open Data'],
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
    ])
    .then((answers) => {
        const generateMd = createMd(answers, badge);

        fs.writeFile('README.md', generateMd, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    });