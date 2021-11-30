function staggeredCase(str) {
  let counter = -1;
  let iterate = (char) => {
    if (char.match(/[a-z]/i)) {
      counter += 1;
      return (counter % 2 === 0) ? char.toUpperCase() : char.toLowerCase();
    } else {
      return char;
    }
  }
  return str.split('').map(iterate).join('');
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"