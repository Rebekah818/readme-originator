// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseString = "" 
  switch (license) {
    case 'MIT': 
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
   default: 
   return "" 
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectname}
${renderLicenseBadge(data.license)}
# Description
${data.description} 
# Installation
${data.installation}
# Usage
${data.usage}
# Credit
${data.contributors}
# Contributors 
${data.github}
# links
${data.repolink}
# Tests
${data.tests}
# Table of Contents
${data.tableofcontents}
`;
};

module.exports = generateMarkdown;

