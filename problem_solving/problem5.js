// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .



// edge case:
// // WE ARE DISCOVERED. FLEE AT 1NCE

// input:
// string with only alphanumeric characters and spaces.

// output:
// string with rail cipher

  // rows = [row1, row2, ...]
  // iterate
// // console.log(row1);
// // console.log(row2);
// // console.log(row3);


// original input: "WE ARE DISCOVERED FLEE AT ONCE"

// Validate input:
// use split, filter, match alphanumeric:
// WEAREDISCOVEREDFLEEATONCE

  // inital values:
  //  rows = Array(n).map to fill in each row
  // /row = Array(str.length).fill('.');

// iterate through string, depend index to fill in proper row;

// if index is so and so, fill in row's index with current char;

// join string at end with ' '

function rail(str, n) {
  str = str.split('').filter(char => char.match(/[a-zA-Z0-9]/));

  let rows = Array(n).fill([]).map(row => Array(str.length).fill('.'));
  let rowsIndex = 0
  let descendToggle = true;


  str.forEach((char, charIndex) => {
    if (descendToggle) {
      rows[rowsIndex][charIndex] = char;
      rowsIndex += 1;
    } else {
      rows[rowsIndex][charIndex] = char;
      rowsIndex -= 1;
    }

    if (rowsIndex === rows.length - 1) descendToggle = false;
    if (rowsIndex === 0) descendToggle = true;
  });
  return rows.forEach(row => console.log(row.join(' ')));
}

// console.log(rail("WE ARE DISCOVERED FLEE AT ONCE", 3));
// // W . . . E . . . C . . . R . . . L . . . T . . . E
// // . E . R . D . S . O . E . E . F . E . A . O . C .
// // . . A . . . I . . . V . . . D . . . E . . . N . .


console.log(rail("WE ARE DISCOVERED; FLEE AT 1NCE", 3));
// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . 1 . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .


// console.log(rail("we ARE DISCOVERED; FLEE AT oNCE OK", 3));
// // w . . . E . . . C . . . R . . . L . . . T . . . E . .
// // . e . R . D . S . O . E . E . F . E . A . o . C . O .
// // . . A . . . I . . . V . . . D . . . E . . . N . . . K

console.log(rail("WE ARE DISCOVERED", 4));
// W . . . . . | I . . . . . R . .
// . E . . . D | . S . . . E . E .
// . . A . E . | . . C . V . . . D
///. . . R . . | . . . O . . . . .

console.log(rail("WE ARE DISCOVERED", 5));
// W . . . . . . . | O . . . . .
// . E . . . . . C | . V . . . .
// . . A . . . S . | . . E . . .
// . . . R . I . . | . . . R . D
// . . . . D . . . | . . . . E .


// top row index is always (n - 1) * 2;
// total round length is always (n * 2) - 2;

// rows = [r1 r2 r3 r4 ...]
// rowsIndex = 0
// descendToggle = false;

// split,forEach(char, charIndex) over input:

// r1 gets char at 0 index
//   // rows[rowsIndex][index] = char
//   // rowsIndex += 1
// r2 gets 1 indexs
// r3 gets 2 ...
// untill
//   rowsIndex == rows.length - 1;
//   // descendToggle = true;

//   rows[rowsIndex][charIndex] = char
//   untill rowsIndex === 0;
//   // desendToggle = false;



// round += 1



