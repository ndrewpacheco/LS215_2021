function leadingSubstrings(str) {
  return str.split('').map((_, index) => str.slice(0, index + 1));
}

function substrings(str) {
  let result = []
  for (let idx = 0; idx < str.length; idx += 1) {
    result.push(leadingSubstrings(str.slice(idx)))
  }
  return result.flat();
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]


