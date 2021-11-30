function swapCase(str) {
  return str.split('').map(char => {
    if (char.match(/[a-z]/)) {
      char = char.toUpperCase();
    } else if (char.match(/[A-Z]/)) {
      char = char.toLowerCase();
    }
    return char;
  }).join('');
}

swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"