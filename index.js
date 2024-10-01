import inquirer from 'inquirer';
let continueCalculation = true; // Flag to control the loop
let previousResult = null; // Variable to store the previous result
while (continueCalculation) {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'numberOne',
            message: previousResult === null
                ? 'Kindly enter your first number: ' // If no previous result, ask for the first number
                : `Previous result is ${previousResult}. Enter next number: `, // Otherwise, show previous result
            when: () => previousResult === null, // Only ask for the first number if no previous result
        },
        {
            type: 'number',
            name: 'numberTwo',
            message: 'Kindly enter your second number: ',
        },
        {
            type: 'list',
            name: 'operator',
            choices: ['+', '-', '*', '/'],
            message: 'Select operator: ',
        },
    ]);
    // If there's a previous result, use it as `numberOne`
    const numberOne = previousResult !== null ? previousResult : answers.numberOne;
    const numberTwo = answers.numberTwo;
    const operator = answers.operator;
    if (numberOne !== undefined && numberTwo !== undefined && operator) {
        let result = 0;
        // Perform the calculation based on the operator
        switch (operator) {
            case '+':
                result = numberOne + numberTwo;
                break;
            case '-':
                result = numberOne - numberTwo;
                break;
            case '*':
                result = numberOne * numberTwo;
                break;
            case '/':
                result = numberOne / numberTwo;
                break;
        }
        // Output the result
        console.log('Result: ', result);
        // Store the result for the next iteration
        previousResult = result;
    }
    else {
        console.log('Invalid input');
    }
    // Ask if the user wants to continue
    const { continueCalc } = await inquirer.prompt({
        type: 'confirm',
        name: 'continueCalc',
        message: 'Do you want to perform another calculation with the previous result?',
        default: true,
    });
    // Update the continue flag
    continueCalculation = continueCalc;
}
console.log('Calculation finished.');
