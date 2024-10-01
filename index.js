import inquirer from 'inquirer';
let continueCalculation = true;
let previousResult = null;
while (continueCalculation) {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'numberOne',
            message: previousResult === null
                ? 'Masukkan Angka Pertama: '
                : `Hasil Sebelumnya ${previousResult}. Masukkan Angka Berikutnya: `,
            when: () => previousResult === null,
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
            message: 'Pilih Operator: ',
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
