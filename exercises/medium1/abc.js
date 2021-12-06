const PAIRS = {
  B:'O',
  G:'T',
  V:'I',
  X:'K',
  R:'E',
  L:'Y',
  D:'Q',
  F:'S',
  Z:'M',
  C:'P',
  J:'W',
  N:'A',
  H:'U',
}

function isBlockWord(str) {
  for (let i = 0; i < str.length; i += 1) {
    let char = str[i].toUpperCase();
    if (PAIRS[char]) {
      if (str.toUpperCase().match(PAIRS[char])) return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true

console.log(isBlockWord('jest1'));       // true
console.log(isBlockWord('Jest'));       // true
console.log(isBlockWord('BuTCH'));      // false
console.log(isBlockWord('BATTCH'));      // true



// input: string
// output: boolean

// if a string uses both letters in a block, return false

// algo should be case insensitive