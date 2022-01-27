// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project name',
            message: 'What is the name of your project? (required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of your project (required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter project description')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },

    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const writeToFile = generateMarkdown(readMeData);
    fs.writeFile('./index.html', writeToFile, err => {
        if (err) throw new Error(err);
        console.log('README created! Check out index.html to view it!');
    });
}
 

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
promptQuestions()
.then()
