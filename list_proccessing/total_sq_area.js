function totalArea(rectangles) {
  let individualAreas = rectangles.map(rectangle => {
    return rectangle[0] * rectangle[1];
  });
  return individualAreas.reduce((previousValue, currentValue) => previousValue + currentValue);
}

// let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// totalArea(rectangles);    // 141

function totalSquareArea(rectangles) {
  let squareRectangles = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  return totalArea(squareRectangles);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalSquareArea(rectangles);    // 121