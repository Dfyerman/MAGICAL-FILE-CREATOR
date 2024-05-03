// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = ['What is your name?', 'What is your location?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
const Apache = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
const IBM = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'project',
                message: 'What is your project name?',
            },
            {
                type: 'input',
                name: 'description',
                message: 'What is your purpose of this code',
            },
            {
                type: 'input',
                name: 'install',
                message: 'What is your install instructions',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'What is your usage information?',
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'What are the contribution guidelines?'
                
            },
            {
                type: 'input',
                name: 'test',
                message: 'What are the test instructions?'
                
            },
            {
                type: 'input',
                name: 'questions',
                message: 'Please add email to contact me!'
                
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please chose your preffered Liscense!',
                choices: [MIT, Apache, IBM],
            },
        ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);

        fs.writeFile('README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Succesfully created README.md!')
        );
    });
};



const generateREADME = ({ project, description, install, usage, contribution, test, questions, license}) =>
`

${license}

## ${project}

## Table Of Contents:


1. [Task](#task)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contribution)
5. [Tests](#tests)
6. [Github](#github)
7. [Questions](#questions)
8. [Credits](#credits)


## Task

${description}

## Installation 

${install}


## Usage 

![Usage](Develop\Images\Desktop Screenshot 2024.05.02 - 22.12.27.80.jpg)

${usage}

[VIDEO LINK](https://drive.google.com/file/d/1Me2qdchY4jHrJURbwaRCUr9r2B_fes7t/view?usp=sharing)

## Contribution

${contribution}

## Tests

${test}

## Github

[Github](https://github.com/Dfyerman?tab=repositories)

## Questions

Please contact me at ${questions}!

## Credits


© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

`

// Function call to initialize app
init();
