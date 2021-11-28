//- There must be one @ sign.
// - The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9).
 //     It may not contain any other characters.
// The domain part must contain two or more components with a single dot (.)
// between each component.
// Each component must contain one or more letters (A-Z, a-z) only.

function isValidEmail(email) {
  // if (!email.includes('@')) return false;

  // let splitEmail = email.split('@');
  // let localPart = splitEmail[0];
  // let domainPart = splitEmail[1];

  // let localMatch = (/^[a-z0-9]+$/i).test(localPart);
  // let domainMatch = (/([a-z]+\.){1,}[a-z]+$/i).test(domainPart);

  // (/^[a-z0-9]+@([a-z]+\.){1,}[a-z]+$/).test(email);

  // return (localMatch && domainMatch);

  return (/^[a-z0-9]+@([a-z]+\.){1,}[a-z]+$/i).test(email);
}


console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
console.log(isValidEmail('foobar.....com'));          // returns false