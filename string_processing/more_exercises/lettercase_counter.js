function letterCaseCount(str) {
  let counterObj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  str.split('').forEach(char => {
    if (char.match(/[a-z]/)) {
      counterObj.lowercase += 1;
    } else if (char.match(/[A-Z]/)) {
      counterObj.uppercase += 1;
    } else {
      counterObj.neither += 1;
    }
  });
  console.log(counterObj);
}

letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }