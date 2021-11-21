// forEach clone

// function myForEach(array, func) {
//   for (let index = 0; index < array.length; index += 1) {
//     func(array[index], index, array);
//   }
// }

// let min = Infinity;
// let getMin = value => (min = value <= min ? value : min);
// myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min);                        // 3

// filter clone

// function myFilter(array, func) {
//   const result = [];
//   for (let index = 0; index < array.length; index += 1) {
//     if (func(array[index])) result.push(array[index]);
//   }
//   return result;
// }

// let isPythagoreanTriple = function (triple) {
//   return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
// };

// myFilter([{ a: 3, b: 4,  c: 5 },
//           { a: 5, b: 12, c: 13 },
//           { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

// // returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

// function multiplesOfThreeOrFive(values) {
//   return myFilter(values, isMultipleOfThreeOrFive)
// }

// function isMultipleOfThreeOrFive(value) {
//   return value % 5 === 0 || value % 3 === 0;
// }

// console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]



// // map clone
// function myMap(array, func) {
//   const result = [];
//   array.forEach(element => result.push(func(element)));
//   return result;
// }

// let plusOne = n => n + 1;
// myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]

// function getBooksTitle(books) {
//   return myMap(books, getTitle);
// }

// let books = [
//   {
//     title: 'JavaScript and JQuery: Interactive Front-End Web Development',
//     author: 'Jon Ducket',
//     edition: '1st',
//   },
//   {
//     title: 'Eloquent JavaScript: A Modern Introduction to Programming',
//     author: 'Haverbeke',
//     edition: '2nd',
//   },
//   {
//     title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
//     author: 'Jennifer Niederst Robbins',
//     edition: '4th',
//   },
// ];

// function getTitle(book) {
//   return book['title'];
// }

// console.log(getBooksTitle(books));
// // console output
// // [
// //   "JavaScript and JQuery: Interactive Front-End Web Development",
// //   "Eloquent JavaScript: A Modern Introduction to Programming",
// //   "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
// // ]


// function add(previousValue, element) {
//   return previousValue + element;
// }



//  reduce

// function myReduce(array, func, initial) {
//   let index = 0;
//   if (initial === undefined) {
//     index = 1;
//     initial = array[0];
//   }
//   let result = initial;
//   for (; index < array.length; index += 1) {
//     result = func(result, array[index])
//   }

//   return result;
// }

// let smallest = (result, value) => (result <= value ? result : value);
// let sum = (result, value) => result + value;
// let multiply = (result, value) => result * value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10));
// console.log(myReduce([5, 12, 15, 1, 6], multiply, 10));           // 54000
// console.log(myReduce([5, 12, 15, 1, 6], multiply)); // 5400


// every

function myOwnEvery(array, func) {
  let result = true;
  array.forEach(element => {
    if (!func(element)) {

      result = false;
    }
  })
  return result;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));
console.log(myOwnEvery([3], isAString));
       // true