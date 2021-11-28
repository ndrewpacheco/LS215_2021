function isBalanced(str) {
  // first parenth must be starting bracket
// its balanced when there are no starting brackets in que
// also when each bracket is accounted for
  let brackets = str.split('').filter(char => char === ')' || char === '(');

  while (brackets.length >= 2) {
    if (brackets[0] === ')') return false;

    let endBracketIndex = brackets.indexOf(')');
    brackets.splice(endBracketIndex, 1);
    brackets.splice(0, 1);
  }

  return (brackets.length === 0);
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false