


/*
The Luhn formula is a simple checksum formula used to validate a variety of
 identification numbers, such as credit card numbers and
 Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit,
which is usually appended to a partial number to generate the full number.

This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20
If the total (the checksum) ends in 0 (put another way,
if the total modulo 10 is congruent to 0),
 then the number is valid according to the Luhn Formula; else it is not valid.
  Thus, 1111 is not valid (as shown above, it comes out to 6),
  while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format,
 check if it is valid per the Luhn formula. This should treat, for example,
  "2323 2005 7766 3554" as valid.
  You can ignore all non-numeric characters in the input string.

*/

// input: string containing digits, and maybe other chars?


// output: boolean dictating valid number or invalid.

// clean up the string so that it only contains digits


// once clean happens
// make str an array, reverse it and check ever other digit
// double every other digit, follow along problem desciprtion

// once all doubled, reduce it to a total sum

// take last digit of the total sum. if the last digit is Zero, it is valid

function cleanUp(str) {
  return str.replace(/[^0-9]/g, '');
}

function luhn(number) {
  number = cleanUp(number);

  let checksum = number.split('').reverse().map((digit, index) => {
    digit = Number(digit);
    if (index % 2 === 1) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    return digit;
  }).reduce((a,b) => a += b);

  return checksum % 10 === 0;
};


// console.log(luhn('1111ffdd'));
// console.log(luhn("8763"));
// test clean up
console.log(cleanUp('111aaa111') === '111111');


//general test
console.log(luhn("2323 2005 7766 3554") === true);
console.log(luhn("1111") === false);
console.log(luhn("8763") === true);




