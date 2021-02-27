// const prompt = require('prompt-sync')();
const input = Number(prompt('enter the num: '));
function factorial(input) {
  try {
    console.log(input);
    if (typeof input !== 'number') throw Error('input must a number');
    if (input <= 1) {
      return 1;
    } else {
      return input * factorial(input - 1);
    }
  } catch (error) {
    console.error(error);
  }
}
console.log(factorial(input));
