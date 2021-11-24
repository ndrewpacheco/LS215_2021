function buyFruit(arr) {
  let result = [];

  arr.forEach(fruit => {
    for (counter = 1; counter <= fruit[1]; counter += 1) {
      result.push(fruit[0]);
    }
  });
  return result;
}
buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]