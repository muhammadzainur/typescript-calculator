import inquirer from 'inquirer';
let continueCalculation = true;
let previousResult = null;
while (continueCalculation) {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'numberOne',
            message: previousResult === null
                ? 'Kindly enter your first number: '
                : `Previous result is ${previousResult}. Enter next number: `,
            when: () => previousResult === null,
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

    const numberOne = previousResult !== null ? previousResult : answers.numberOne;
    const numberTwo = answers.numberTwo;
    const operator = answers.operator;
    if (numberOne !== undefined && numberTwo !== undefined && operator) {
        let result = 0;

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

        console.log('Result: ', result);
        previousResult = result;
    }
    else {
        console.log('Invalid input');
    }
    const { continueCalc } = await inquirer.prompt({
        type: 'confirm',
        name: 'continueCalc',
        message: 'Do you want to perform another calculation with the previous result?',
        default: true,
    });
    continueCalculation = continueCalc;
}
console.log('Calculation finished.');
