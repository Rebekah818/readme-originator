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
            type: 'input',
            name: 'repolink',
            message: 'Please provide the link to your Github Repo!',
            validate: repoLink => {
                if (repoLink) {
                    return true;
                } else {
                    console.log('Please provide repo link');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is this project used for?',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please tell us the usage of this project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'credit',
            message: 'list your collaborators if any with links to their Github profiles',
            validate: creditInput => {
                if (creditInput) {
                    return creditInput
                } else {
                    return '';
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license',
            choices: ['MIT', 'Boost', 'Apache', 'no license'],
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please provide istallation instructions.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tableofcontents',
            message: 'Please list the table of contents here',
            validate: tableContentsInput => {
                if (tableContentsInput) {
                    return true;
                } else {
                    console.log('Add your table of contents list');
                    return false;
                }
            }

        },

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
    const response = await promptQuestions();
    console.log(response);
    const markdown = await generateMarkdown(response);
    writeToFile('README.md', markdown);
};

// Function call to initialize app
init()

