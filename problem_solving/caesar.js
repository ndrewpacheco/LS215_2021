// The Caesar Cipher only encrypts letters (including both lower and upper case).
 // Any other character is left as is.

// The substituted letters are in the same letter case as the original letter.

 // If the key value for shifting exceeds the length of the alphabet,
 // it wraps around from the beginning.


 /*
  A 65 + 25 = 90
  Y 89 + 25 = 114

  if uppercase letter
  ((total - 90) + 65)
  keep shifting untill we get total under 90 after totally charcode plus key.
  find charcode

  if lowercase
  do same as upper case code to find letter, just lowercase it at theend.

  else return char


split str
map: alter each char according to needs
join
 */

 function findChar(charCode, key) {
  charCode += key;
  while (charCode > 90) {
    charCode -= 26;
  }
  return charCode;
 }

function caesarEncrypt(str, encryptKey) {
  return str.split('').map(char => {
    let charCode = char.toUpperCase().charCodeAt(0);
    let newCharCode = findChar(charCode, encryptKey);

    if (char.match(/[A-Z]/)) {
      return String.fromCharCode(newCharCode);
    } else if (char.match(/[a-z]/)) {
      return String.fromCharCode(newCharCode).toLowerCase();
    } else {
      return char;
    }

  }).join('');
}


// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"