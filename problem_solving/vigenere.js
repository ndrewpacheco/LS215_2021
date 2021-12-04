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

function vigenere(plaintext, keyword) {
  const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let shifts = keyword.split('').map(char => ALPHA.indexOf(char.toLowerCase()));
  let toggleIndex = 0;

  return plaintext.split('').map(char => {
    if (char.match(/[a-zA-Z]/)) {

      char = caesarEncrypt(char, shifts[toggleIndex]);
      toggleIndex += 1;
      if (toggleIndex >= keyword.length) toggleIndex = 0;
    }
    return char;
  }).join('');

}



let plaintext = "Pineapples don't go on pizzas!";
let keyword = 'meat';
console.log(vigenere(plaintext, keyword));


// result: Bmnxmtpeqw dhz'x gh ar pbldal!


/*
  input:
  plaintext and keyword;




  map keyword according to an aplha constant


  split arr,
  map each char
  if it' alpha
  toggle index of shifkey

  else return char


*/