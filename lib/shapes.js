// Constructor for Circle
function Circle(text, text_color, shape_color) {

    this.svgContent = `<circle cx="50" cy="50" r="40" fill="${shape_color}" />
                       <text x="50%" y="50%" font-size="24" text-anchor="middle" alignment-baseline="middle" fill="${text_color}">${text}</text>`;
}

// Constructor for Square
function Square(text, text_color, shape_color) {
    this.svgContent = `<rect height="200" width="200" fill="${shape_color}" />
    <text x="50%" y="50" font-size="24" text-anchor="middle" alignment-baseline="middle" fill="${text_color}">${text}</text>`;
}

// Constructor for Triangle
function Triangle(text, text_color, shape_color) {
    this.svgContent = `<polygon height="100%" width="100%" points="50,10 90,90 10,90" fill="${shape_color}"/><text x="50%" y="50%" font-size="20" text-anchor="middle" alignment-baseline="middle" fill="${text_color}">${text}</text>`;
}

module.exports = {
    Circle,
    Square,
    Triangle,
};