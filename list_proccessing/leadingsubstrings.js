function substrings(str) {
  let result = []
  for (let idx = 0; idx < str.length; idx += 1) {
    result.push(leadingSubstrings(str.slice(idx)))
  }
  return result.flat();
}

function leadingSubstrings(str) {
  return str.split('').map((_, index) => str.slice(0, index + 1));
}


leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

