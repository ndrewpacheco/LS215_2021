/*

  middlePoint = Math.floor(n / 2)
  middleRow = Array(n).fill('*');


  firstIndex = 0
  lastIndex = n - 1

  within a for loop, this loop breaks at middle point:
  create an array, fill with ' ', n times.
  currentRow = Array(n).fill(' ');

  currentRow[firstIndex] = '*'
  currentRow[lastIndex] = '*'
  currentRow[middlePoint] = '*'

  firstIndex += 1;
  last index - = 1;


  once loop is doing
  insert middlerow


  Middle star is always arr[middle point]



*/
function star(n) {
  const middlePoint = Math.floor(n / 2);
  const middleRow = Array(n).fill('*').join('');

  let firstIndex = 0;
  let lastIndex = n - 1;

  for (let counter = 1; counter <= middlePoint; counter += 1) {
    let currentRow = Array(n).fill(' ');

    currentRow[firstIndex] = '*';
    currentRow[lastIndex] = '*';
    currentRow[middlePoint] = '*';
    console.log(currentRow.join(''));
    firstIndex += 1;
    lastIndex -= 1;
  }

  console.log(middleRow);
  firstIndex -= 1;
  lastIndex += 1;

  for (let counter = 1; counter <= middlePoint; counter += 1) {
    let currentRow = Array(n).fill(' ');

    currentRow[firstIndex] = '*';
    currentRow[lastIndex] = '*';
    currentRow[middlePoint] = '*';
    console.log(currentRow.join(''));
    firstIndex -= 1;
    lastIndex += 1;
  }

}
star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *


star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

