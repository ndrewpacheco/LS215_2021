function fridayThe13ths(year) {
  let result = 0
  for (let month = 0; month < 12; month += 1) {
    if (new Date(year, month, 13).getDay() === 5) result += 1;
  }
  console.log(result);
}



fridayThe13ths(1986);      // 1
fridayThe13ths(2015);      // 3
fridayThe13ths(2017);      // 2

// input: a number, reps the year in question
// output: a number representing the amount of  fridayThe13ths



// of input year
// Janurary 13
// Feb 13
// ...

// const birthday = new Date('August 19, 1975 23:15:30');
// const day1 = birthday.getDay();
// // Sunday - Saturday : 0 - 6

// console.log(day1);
// // expected output: 2



// new Date(year, month, 13).getDay() === 6;

// edgecases: test valid input?
// input is a number && its greater than 1752