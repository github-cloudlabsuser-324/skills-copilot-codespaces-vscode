const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the first number: ', (firstNumber) => {
  rl.question('Enter the second number: ', (secondNumber) => {
    rl.question('Enter the operation (add, subtract, multiply, divide): ', (operation) => {
      let result;
      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);

      switch (operation) {
        case 'add':
          result = firstNumber + secondNumber;
          break;
        case 'subtract':
          result = firstNumber - secondNumber;
          break;
        case 'multiply':
          result = firstNumber * secondNumber;
          break;
        case 'divide':
          if (secondNumber === 0) {
            console.log('Cannot divide by zero');
            rl.close();
            return;
          }
          result = firstNumber / secondNumber;
          break;
        default:
          console.log('Invalid operation');
          rl.close();
          return;
      }

      console.log(`The result is: ${result}`);
      rl.close();
    });
  });
});