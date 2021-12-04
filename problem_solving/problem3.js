const LETTERS = {
  B:'O',
  G:'T',
  V:'I',
  X:'K',
  R:'E',
  L:'Y',
  Z:'M',
  D:'Q',
  C:'P',
  N:'A',
  F:'S',
  J:'W',
  H:'U',
}

function isBlockWord(word) {
  word = word.toUpperCase().split('');

  for (let index = 0; index < word.length; index += 1) {
    let char = word[index];

    if (Object.keys(LETTERS).includes(char)) {
      if (word.includes(LETTERS[char])) return false;
    }
  }
  return true;
}
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('BCTUH'));      // false
console.log(isBlockWord('jest'));       // true


// questions:

// sest



// iterate through each char
// find index of letters,
// find the pair for each char,
// test to see if string includes the pair char.
// includes