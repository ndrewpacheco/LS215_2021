// 1

// function isUrl(url) {
//  let result = url.match(/^https*:\/\/\S+$/);
//  console.log(!!result);
// }

// isUrl('http://launchschool.com');   // -> true
// isUrl('https://example.com');       // -> true
// isUrl('https://example.com hello'); // -> false
// isUrl('   https://example.com');    // -> false



// 2

// function fields(str) {
//   return str.split(/[\t ,]+/);
// }

// fields("Pete,201,Student");
// // -> ['Pete', '201', 'Student']

// fields("Pete \t 201    ,  TA");
// // -> ['Pete', '201', 'TA']

// fields("Pete \t 201");
// // -> ['Pete', '201']

// fields("Pete \n 201");
// // -> ['Pete', '\n', '201']



// // 3
// function mysteryMath(str) {
//   return str.replace(/[+\-\/*]/, '?')
// }

// mysteryMath('4 + 3 - 5 = 2');
// // -> '4 ? 3 - 5 = 2'

// mysteryMath('(4 * 3 + 2) / 7 - 1 = 1');
// // -> '(4 ? 3 + 2) / 7 - 1 = 1'

// // 4
// function mysteriousMath(str) {
//   return str.replaceAll(/[+\-\/*]/g, '?')
// }

// mysteriousMath('4 + 3 - 5 = 2');           // -> '4 ? 3 ? 5 = 2'
// mysteriousMath('(4 * 3 + 2) / 7 - 1 = 1'); // -> '(4 ? 3 ? 2) ? 7 ? 1 = 1'



// // 5
// function danish(str) {
//   console.log(str.replace(/\b(apple|blueberry|cherry)\b/,'danish'))
// }
// danish('An apple a day keeps the doctor away');
// // -> 'An danish a day keeps the doctor away'

// danish('My favorite is blueberry pie');
// // -> 'My favorite is danish pie'

// danish('The cherry of my eye');
// // -> 'The danish of my eye'

// danish('apple. cherry. blueberry.');
// // -> 'danish. cherry. blueberry.'

// danish('I love pineapple');
// // -> 'I love pineapple'


// 6
function formatDate(str) {
  return str.replace(/(\d\d\d\d)\1(\-|\/)\2(\d\d)($2)(\d\d)/, '$5.$3.$1')
}

console.log(formatDate('2016-06-17')); // -> '17.06.2016'
console.log(formatDate('2017/05/03')); // -> '03.05.2017'
console.log(formatDate('2015/01-31')); // -> '2015/01-31' (no change)