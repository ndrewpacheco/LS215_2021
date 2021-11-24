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

function palindromes(str) {
  return substrings(str).filter((word) => {
    return (word.length > 1) && word === word.split('').reverse().join('');
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]