function rotateArray(arr) {
  if (!Array.isArray(arr)) return;
  if (arr.length === 0) return arr;

 return array.slice(1).concat(array[0]);
}

function rotateRightmostDigits(number, n) {
  numbersArr = String(number).split('').reverse();

  let rotatedNum = numbersArr.splice([n - 1], 1);
  return Number(rotatedNum.concat(numbersArr).reverse().join(''));
}


function maxRotation(number) {
  let numberLength = String(number).length;
  for (let counter = numberLength; counter >= 1; counter -= 1) {
    number = rotateRightmostDigits(number, counter)
  }
  return number
}


maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845