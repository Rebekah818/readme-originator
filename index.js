// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const x = {
    projectName: "project name"
}
// TODO: Create an array of questions for user input
const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectname',
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
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license',
            choices: ['MIT','Boost','Apache','no license'],
            // // validate: (licenseInput) => {
            // //     if (licenseInput) {
            // //         return true;
            // //     } else {
            // //         console.log('Please select from the license list');
            // //         return false;
            // //     }
            // }
        }
    ]);
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err => {
        if (err) throw new Error(err);
        console.log('README created! Check out README.md to view it!');
    });
};

// TODO: Create a function to initialize app
async function init() {
    const response= await promptQuestions();
    console.log(response);
 const markdown = await generateMarkdown(response);
 writeToFile('README.md', markdown);
};

// Function call to initialize app
init()

