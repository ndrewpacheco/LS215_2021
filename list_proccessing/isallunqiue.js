function isAllUnique(string) {
  let seenChar = {};

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') continue;

    let char = string[index].toLowerCase();
    if (seenChar[char]) return false;

    seenChar[char] = true;

  }
  return true
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true

