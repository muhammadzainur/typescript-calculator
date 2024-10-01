import inquirer from 'inquirer';
const answers = await inquirer.prompt([
    {
        type: 'number',
        name: 'numberOne',
        message: 'Masukkan Angka Pertama: ',
    },
    {
        type: 'number',
        name: 'numberTwo',
        message: 'Masukkan Angka Kedua: ',
    },
    {
        type: 'list',
        name: 'operator',
        choices: ['+', '-', '*', '/'],
        message: 'Selct operator: ',
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === '+') {
        result = numberOne + numberTwo;
    }
    else if (operator === '-') {
        result = numberOne - numberTwo;
    }
    else if (operator === '*') {
        result = numberOne * numberTwo;
    }
    else if (operator === '/') {
        result = numberOne / numberTwo;
    }
    console.log('Your result is: ', result);
}
else {
    console.log('Kindly enter valid inputs');
}
