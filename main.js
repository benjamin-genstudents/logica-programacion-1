const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let num3 = parseFloat(prompt("Introduce el tercer número:"));

function areNumbersEqual(a, b, c) {
    return a === b && b === c;
}

function sortNumbers(a, b, c) {
    let numbers = [a, b, c];
    numbers.sort((x, y) => y - x);
    return numbers;
}

if (areNumbersEqual(num1, num2, num3)) {
    console.log("Todos los números son iguales.");
} else {
    let [numMax, numMid, numMin] = sortNumbers(num1, num2, num3);
    
    console.log("Ordenados de mayor a menor:", numMax, numMid, numMin)
    console.log("Ordenados de menor a mayor:", numMin, numMid, numMax)
}
