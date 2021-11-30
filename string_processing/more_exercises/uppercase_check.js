  function isUppercase(str) {
    let result = true;
    str.split('').forEach(char => {
      if (char.match(/[a-z]/i)) {
        if (char !== char.toUpperCase()) {
          result = false;
        }
      }
    });
    return result;
  }

  isUppercase('t');               // false
  isUppercase('T');               // true
  isUppercase('Four Score');      // false
  isUppercase('FOUR SCORE');      // true
  isUppercase('4SCORE!');         // true
  isUppercase('');                // true