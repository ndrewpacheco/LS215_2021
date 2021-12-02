// 0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

/*
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Write a function that takes any two version numbers in this format and compares them,
with the result of this comparison showing whether the first is less than,
 equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters other than digits and the . character,
#we should return null.
*/
function isInvalid(version1, version2) {
  return typeof version1 !== 'string' || typeof version2 !== 'string'
  || version1.match(/(^\D|\D$|\.\.|[^0-9.])/) || version2.match(/(^\D|\D$|\.\.|[^0-9.])/);
}

// function isInvalid(version1, version2) {
//   return typeof version1 !== 'string' || typeof version2 !== 'string'
//   || !version1.match(/^\d+(\.\d+)+/) || !version2.match(/^\d+(\.\d+)+/);
// }


function compareVersions(version1, version2) {
  if (isInvalid(version1, version2)) return null;

  splitVersion1 = version1.split('.');
  splitVersion2 = version2.split('.');

  if (splitVersion1.length < splitVersion2.length) {
    do {
      splitVersion1.push('0');
    } while (splitVersion1.length < splitVersion2.length)
  }

  if (splitVersion2.length < splitVersion1.length) {
    do {
      splitVersion2.push('0');
    } while (splitVersion2.length < splitVersion1.length)
  }

  for (let index = 0; index < splitVersion1.length; index += 1) {

    let num1 = Number(splitVersion1[index]);
    let num2 = Number(splitVersion2[index]);

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }
  return 0;
  // return [splitVersion1, splitVersion2];
}


// test for valid version numbers:
// console.log(compareVersions('1', 's') === null);
// console.log(compareVersions('1.3d', '2') === null);
// console.log(compareVersions(1, '1') === null);
// console.log(compareVersions('1.3', 2) === null);

// // test for if version is greater
// console.log(compareVersions('2', '1') === 1);
// console.log(compareVersions('2.0', '1.0') === 1);

// console.log(compareVersions('2', '3') === -1);
// console.log(compareVersions('2.0', '3.0') === -1);
// console.log(compareVersions('2.0.0', '2.3.44.30') === -1);
// console.log(compareVersions('2.3.0.03.0', '1.3.44.30')=== 1);
// console.log(compareVersions('2.0.0.03.0', '1.3.44.30')=== 1);

// console.log(compareVersions('3', '3') === 0);

// // console.log(compareVersions(3, 2) === 1);
// // console.log(compareVersions(2, 2) === 0);


console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1



// input: two strings which are both software .versions
// each digit is seperaed by points.
// we want to compare each digit untill we run out of digits (smallest version)
// 0.1 < 1
//

// // gaurd clase:
//   If either version number contains characters other than digits and the . character,
// #we should return null.


// split versions by '.' THis  isolate each num between each point.
// find out what which version is smaller.
// push 0's onto smaller array, until both versions are the same length


// return 0 if both arrays are the same (to string)

// compare each num( convert to number) to eachother until we iterate through the whole array.



// output: either 1, -1 or, 0

//  1.2.2.0 === 1.2.2.3

