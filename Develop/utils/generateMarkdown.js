const licenses = [
  {
    license: 'Apache',
    link: 'https://opensource.org/licenses/Apache-2.0',
    badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
  },
  {
    license: 'BSD',
    link: 'https://opensource.org/licenses/BSD-3-Clause',
    badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
  },
  {
    license: 'GNU',
    link: 'https://www.gnu.org/licenses/gpl-3.0',
    badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  },
  {
    license: 'MIT',
    link: 'https://opensource.org/licenses/MIT',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  },
  {
    license: 'Mozilla Public License',
    link: 'https://opensource.org/licenses/MPL-2.0',
    badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
  },
  {
    license: 'None',
  },
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
    case 'Apache':
      var chosenLicense = licenses[0];
      break;
    case 'BSD':
      var chosenLicense = licenses[1];
      break;
    case 'GNU':
      var chosenLicense = licenses[2];
      break;
    case 'Mozilla Public License':
      var chosenLicense = licenses[3];
      break;
    case 'None':
      var chosenLicense = licenses[4];
      break;
  }

  if (license !== 'None') {
    return `<a href="${chosenLicense.link}">![${license} tag](${chosenLicense.badge})</a>`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n- [License](#license)`;
  } else {
    return '';
  }
}

// Note: There's a conflict here in the instructions. Code specifies to make a single license section. Instructions README indicates badge should be near top of document and the other data should be returned further down in the body text. I've chosen to follow the instructions in the README.

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`
  } else {
    return ''; // Maybe don't use this?
  }  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)${renderLicenseLink(data.license)}
- [How to Contribute](#how-to-contribute)
- [Testing](#testing)
- [Questions](#questions)

## Installation
${data.installation}

## Credits
Awesome generator made by Ben Martin.

${renderLicenseSection(data.license)}

## How to Contribute
${data.contribution}

## Testing
${data.testing}

## Questions
${data.questions}

### GitHub
<a href="https://github.com/${data.github}">${data.github}</a>

### Email
<a href="mailto: ${data.email}">${data.email}</a>`;
}

module.exports = generateMarkdown;

// Don't export the other things. generateMarkdown should grab all of the returned data.
// You can get links to licenses online.





  // switch (data.license) {
  //   case 'Apache':
  //     var chosenLicense = licenses[0];
  //     break;
  //   case 'BSD':
  //     var chosenLicense = licenses[1];
  //     break;
  //   case 'GNU':
  //     var chosenLicense = licenses[2];
  //     break;
  //   case 'Mozilla Public License':
  //     var chosenLicense = licenses[3];
  //     break;
  //   case 'None':
  //     var chosenLicense = licenses[4];
  //     break;
  // }