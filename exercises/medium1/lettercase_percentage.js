function letterPercentages(str) {
  let result = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }

  str.split('').forEach(char => {
    if (char.match(/[A-Z]/)) {
      result.uppercase += 1;
    } else if (char.match(/[a-z]/)) {
      result.lowercase += 1;
    } else {
      result.neither += 1;
    }
  })

   Object.keys(result).forEach(property => {
    result[property] = (result[property] / str.length * 100).toFixed(2);
   });

   console.log(result)
}

letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }



// input: string
// output: returns an object, with three properties. each property has a stirng showing the letterPercentages
// percentages have 2 digits leading after .





// length of string will dictate what we divide by
// initiate object before iteration

// let result = {
//   lowercase: 0,
//   uppercase: 0,
//   neither: 0,
// }

// iterate trhough string, plus 1 every match to object.


// go through each prop in result, figure out percentage, and assign new string to that.



// questions: includes whitespace?
// assume that input is always string?