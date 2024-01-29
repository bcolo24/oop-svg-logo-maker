const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Function to validate and format colors
function formatColor(input) {
    return input; 
}

// Function to generate SVG content based on user input
function generateSVG(shape, text, text_color, shape_color) {
    let svgContent = '';

    switch (shape) {
        case 'Circle':
            svgContent = new Circle(text, formatColor(text_color), formatColor(shape_color)).svgContent;
            break;
        case 'Square':
            svgContent = new Square(text, formatColor(text_color), formatColor(shape_color)).svgContent;
            break;
        case 'Triangle':
            svgContent = new Triangle(text, formatColor(text_color), formatColor(shape_color)).svgContent;
            break;
        default:
            console.error('Invalid shape.');
    }

    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
                ${svgContent}
            </svg>`;
}

// Prompt the user for input using Inquirer
inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter three characters:',
            validate: (input) => input.length === 3 || 'Please enter exactly three characters.',
        },
        {
            type: 'input',
            name: 'text_color',
            message: 'Enter a color or hexadecimal number for the text:'
        },
        {
            type: 'input',
            name: 'shape_color',
            message: 'Enter a color or hexadecimal number for the shape:'
        },
    ])
    .then((answers) => {
        const svgContent = generateSVG(answers.shape, answers.text, answers.text_color, answers.shape_color);

        // Save the generated SVG content to a file
        fs.writeFileSync('generated-logo.svg', svgContent);

        console.log('SVG logo generated successfully! Check "generated-logo.svg".');
    })
    .catch((error) => {
        console.error('Error:', error);
    });