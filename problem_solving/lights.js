

// input: a number repping the rounsds switches
// each round alternates how many switches are pulled, accoring to n

// n also tells us how many switches are involved.

// initally all lighss are tunred off
// starting with the first light:
// 1st round, we turn on every single light
// 2nd everother
// 3rd every third
// till nth round

// assume positive interger input

// output:

// array of lights that are initially turend off, return the number (index)
// of each ligh that is turned on at the final round.


// between each round toggle between t or f
// [true, false, true]
// final round, return the keys of all the true elements.


// toggle array, fill with false values up to n;
// toggle = if element is true make it false, vice versa

// for loop that dicates which elemnts to toggle


// at the end of loop, push the idx of all the true elements to result array.toggle


function lightsOn(switches) {
  let toggleArray = [];
  toggleArray.length = switches;
  toggleArray.fill(false);

  let toggle = (element) => {
    if (element) {
      return element = false
    } else {
      return element = true;
    }
  }

  for (let round = 1; round <= switches; round += 1) {
    toggleArray = toggleArray.map((lightSwitch, index) => {
      if ((index + 1) % round === 0) {
        return toggle(lightSwitch);
      } else {
        return lightSwitch;
      }
    });
  }
  let result = [];
  toggleArray.forEach((element, index) => {if (element) result.push(index + 1)});
  return result;
}

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]


console.log(1) // [1]

