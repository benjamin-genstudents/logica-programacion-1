const main = require('./main.js');

const testInputs = [
    [4, 4, 2],
    [4, 4, 2],
    [2, 4, 4],
    [4, 2, 4],
    [4, 4, 2],
    [2, 4, 4],
    [2, 4, 4],
    [4, 4, 2],
    [2, 4, 4]
];

testInputs.forEach(([num1, num2, num3]) => {
    console.log(`\nProbando con: ${num1}, ${num2}, ${num3}`);
    main(num1, num2, num3);
});