let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => {
    let newBand = {
      name: formatName(band.name),
      country: 'Canada',
      active: band.active,
    }
    return newBand;
  })
}

function formatName(name) {
  let newName = name.split(' ').map(word => {
    let newWord = word[0].toUpperCase() + word.slice(1);
    return newWord.split('').filter(char => char !== '.').join('');
  });
  return newName.join(' ');
}

console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]