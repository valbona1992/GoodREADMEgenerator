// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None"){
    return "";
  } else if (license === "MIT"){
    return `![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)`;
    // [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  }
  else if (license === "Apache"){
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    // [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  }
  else if (license === "GPL"){
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-yellow.svg)`
    // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0)
  }
  else if (license === "BSD3"){
    return `![License: BSD3](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)`
    // [![License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None"){
    return "";
  } else if (license === "MIT"){
    return `[MIT](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Apache"){
    return `[Apache](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "GPL"){
    return `[GPL v3](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license === "BSD3"){
    return `[BSD3](https://opensource.org/licenses/BSD-3-Clause)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None"){
    return "";
  } else {
    return `License is ${renderLicenseLink(license)} standard license.
    `;
    // Showing up as box 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}  <br/>
  ${renderLicenseBadge(answers.license)}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents 
  
  * [User Story](#userstory)
  * [Demo Video](#demovideo)
  * [Screenshots](#screenshots)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## User Story
  ${answers.userstory}
  
  
  ## Demo Video 

  🎥 The full video file showing functionality of the application can be found here: [link](https://drive.google.com/file/d/1lyQ0vlO9kzeGwtsFqQqWngqlJp-mvKJt/view) <br/>

 ![Screen Recording](${answers.demovideo})
  
  ## Screenshots
  <img src="${answers.firstscreenshot}" alt="screenshot" /> <br/> <br/>
  <img src="${answers.secondscreenshot}" alt="screenshot" />
  
  ## Installation
  \`\`\`
  ${answers.installation}
  \`\`\`
  
  ## Usage
  \`\`\`
  ${answers.usage}
  \`\`\`\
  
  ## Contributors
  ${answers.contributors}
  
  ## License
  ${renderLicenseSection(answers.license)}
  
  ## Tests
  ${answers.test}
  
  ## Questions
   GitHub: https://github.com/${answers.github}  <br/>
   Email me with any questions: ${answers.email}
   `;
}

module.exports = generateMarkdown;
