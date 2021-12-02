// Problem Description
// Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages.
// Other than digits, the number may also contain special character such as
 // spaces, dash, dot, and parentheses that should be ignored.

// The rules are as follows:

// If the phone number is less than 10 digits, assume that it is a bad number.
// If the phone number is 10 digits, assume that it is good.
// If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
// If the phone number is more than 11 digits, assume that it is a bad number.
// For bad numbers, just a return a string of 10 0s.



// questions:
// should we test for an input that isnt a string?
  // assume it is always string

// what happens if we get characters that are not digits, or special characters?
// assume we only get what is described



// input: a string that contains digits. It might also contain special characters

// output: a string of 10 digits.
  // if it is a bad number, return 10 zeros
  // else returned cleaned up number



// // clean up input string:
//   - make sure input string only contains digits before checking if it is bad number.
//    split, filter for only digits


// // Figure out if number is bad via certian critera
//   What is a bad number?
//    // If the phone number is more than 11 digits or less than 10, assume that it is a bad number.
// If the phone number is 11 digits and the first number is not 1, then it is a bad number.
  // If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.



// if it isnt bad, output string that contains only digits



const badNumber = '0000000000';

function cleanUp(phoneNumber) {

  phoneNumber = phoneNumber.split('').filter(char => {
    return char.match(/[0-9]/g);
  });

  if (phoneNumber.length > 11 || phoneNumber.length < 10) return badNumber;

  if (phoneNumber.length === 11) {
    if (phoneNumber[0] !== '1') return badNumber;
    phoneNumber.shift();
  }

  return phoneNumber.join('');
};

// test for proper clean up of special chars.
console.log(cleanUp('6476666254'));
console.log(cleanUp('(647)666-6254') === '6476666254');
console.log(cleanUp('(647) 666-6254') === '6476666254');
console.log(cleanUp('(647)6666254') === '6476666254');
console.log(cleanUp('6476666254') === '6476666254');


// test for right phone number length
console.log(cleanUp('(647)6254') === badNumber);
console.log(cleanUp('(647)6443434254') === badNumber);

// test for 11 digit number
console.log(cleanUp('1(647)666-6254') === '6476666254');
console.log(cleanUp('2(647)666-6254') === badNumber);
console.log(cleanUp('2(647)666-6254') === badNumber);

