function anagram(word, list) {
  return list.filter(listWord => {
    return sortString(word) === sortString(listWord);
  });
}

function sortString(word) {
  return word.split('').sort().join('');
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]


