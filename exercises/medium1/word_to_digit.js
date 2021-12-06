
const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

// let text = 'Four score and seven';
// let vowelless = text.replace(/[aeiou]/g, '*');
// // -> 'F**r sc*r* *nd s*v*n'


function wordToDigit(str) {
  NUMBERS.forEach((number, index) => {
    let regex = new RegExp(number, 'g');
    str = str.replaceAll(regex, index);
  })
  console.log(str);
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."