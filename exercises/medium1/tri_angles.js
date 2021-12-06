/*

guard clause:
To be a valid triangle, the sum of the angles must be exactly 180 degrees,and every angle must be greater than 0.
If either of these conditions is not satisfied, the triangle is invalid.



Right: One angle is a right angle (exactly 90 degrees).

some method on angles to find 90
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.
*/

function triangle(...angles) {
  if (angles.some(angle => angle <= 0) || angles.reduce((a,b) => a += b) !== 180)  return 'invalid';

  if (angles.some(angle => angle === 90)) return 'right';
  if (angles.some(angle => angle > 90)) return 'obtuse';
  if (angles.filter(angle => angle < 90).length === 3) return 'acute';

}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(-1, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"