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
  // console.log(`generateMarkdown says: ${data.title}`);
  return `# ${data.title}

## Description
${data.description}

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${data.installation}

## Credits
Awesome generator made by Ben Martin.

## License
${data.license}

## How to Contribute
${data.contribution}

## Testing
${data.testing}

## Questions
${data.questions}`;
}

module.exports = generateMarkdown;

// Don't export the other things. generateMarkdown should grab all of the returned data.
// You can get links to licenses online.
