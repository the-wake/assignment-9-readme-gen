# Readme Generator

## Description
This is a back-end readme generator run via node.

## Installation
Users must use npm to install inquirer to the application before running. From the command line, run:
```
(npm i inquirer)
```

## Usage
When index.js is run in Node, users will be prompted to input a number of parameters such as Project Title, Description, Installation, and License Information. The readme will then be created using the fs.writeFile method and populated with their entries. The file will include a Table of Contents with anchors for the specified headers.



Note that the user can specify no license. In this case, the License section (and its corresponding listing in the table of contents) will not be generated.

## Tools Used
* JavaScript
* Node.js
* NPM
* inquirer
* GitHub
* GitBash
* Video captured with screencastify
* Coded in VS Code
