const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./shapes'); // Import shapes module

// Prompt the user for input using Inquirer
inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['circle', 'square', 'triangle'],
        },
        {
            type: 'input',
            name: 'characters',
            message: 'Enter three characters:',
            validate: (input) => input.length === 3 || 'Please enter exactly three characters.',
        },
        {
            type: 'list',
            name: 'color',
            message: 'Select a color:',
            choices: ['red', 'green', 'blue', 'yellow', 'purple'],
        },
    ])
    .then((answers) => {
        const svgContent = generateSVG(answers.shape, answers.characters, answers.color);

        // Save the generated SVG content to a file
        fs.writeFileSync('generated-logo.svg', svgContent);

        console.log('SVG logo generated successfully! Check "generated-logo.svg".');
    })
    .catch((error) => {
        console.error('Error:', error);
    });