// Write a function that displays a four-pointed diamond in an nxn grid,
 // where n is an odd integer supplied as an argument to the function.
 // You may assume that the argument will always be an odd integer.

/*
  input: int
  output: strings of and white space *, dimaond

  the input is the length of the middle of the diamond

  iter something until we reach the middle of diamond

  start at 1 *

  4 + 1



  MAth.floor(n / 2) initial ws

  plus
  1 asterik

  increase asteriks by 2
  decraase ws by 1
  loop until row is all stars;




*/
const SPACE = ' ';
const STAR = '*';

function diamond(n) {
  const intial_spaces = Math.floor(n / 2);
  let spaces = intial_spaces;

  for (let stars = 1; stars <= n; stars += 2) {
    console.log(SPACE.repeat(spaces) + STAR.repeat(stars));
    spaces -= 1;
  }

  spaces = 0;
  for (let stars = n; stars > 0; stars -= 2) {
    console.log(SPACE.repeat(spaces) + STAR.repeat(stars));
    spaces += 1;
  }
}


// diamond(1);
// // logs
// // *

// diamond(3);
// // logs
// //  *
// // ***
// //  *

 diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *