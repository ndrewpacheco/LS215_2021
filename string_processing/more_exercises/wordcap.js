function wordCap(str) {
  return str.split(' ').map(word => {
    if (word[0].match(/[a-z]/i)){
      return word[0].toUpperCase() + word.slice(1);

    } else {
      return word;
    }
  }).join(' ')
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'