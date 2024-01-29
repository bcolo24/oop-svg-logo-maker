const { Circle, Square, Triangle } = require('./shapes');

// Test Circle
test('Circle should have correct SVG content', () => {
    const circle = new Circle('Test', 'red', 'blue');
    expect(circle.svgContent).toEqual(expect.stringContaining('<circle'));
    expect(circle.svgContent).toEqual(expect.stringContaining('<text'));
});

// Test Square
test('Square should have correct SVG content', () => {
    const square = new Square('Test', 'green', 'yellow');
    expect(square.svgContent).toEqual(expect.stringContaining('<rect'));
    expect(square.svgContent).toEqual(expect.stringContaining('<text'));
});

// Test Triangle
test('Triangle should have correct SVG content', () => {
    const triangle = new Triangle('Test', 'purple', 'orange');
    expect(triangle.svgContent).toEqual(expect.stringContaining('<polygon'));
    expect(triangle.svgContent).toEqual(expect.stringContaining('<text'));
});