// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](https://img.shields.io/badge/License-${data.license.replaceAll(" ", "_")}-blue.svg)](https://opensource.org/licenses/${data.license === 'Apache 2.0' ? 'Apache-2.0' : data.license})\n

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.intsallation}

## Usage
${data.usage}

## Contribute
${data.contributors}

## license
This project uses: ${data.license}


## Tests
${data.test}

## Questions
${data.github}
You can reach me @ ${data.email}

`;
}

module.exports = generateMarkdown;
