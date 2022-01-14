const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage Information:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'License Used:',
        choices: ['Apache', 'BSD', 'GNU', 'MIT', 'Mozilla Public License', 'None',],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines:',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Testing Instructions:',
        name: 'testing',
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email Address:',
        name: 'email',
    },
];

function init() {
    inquirer
    .prompt([...questions])
    .then((answers) => {
        var mdText = writeToFile(answers);
        fs.writeFile('newREADME.md', mdText, (err) => {
            if (err) {
                console.log(err);
            }
        })
    })
}

// Criteria called for the title to be generated dynamically. However I would confirm with the client that this is what they want, since it is not standard practice. Also it prevents us from git ignoring the readme file.
function writeToFile(data) {
    return generateMarkdown(data);
}


init();
