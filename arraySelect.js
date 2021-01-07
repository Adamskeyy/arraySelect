// Stwórz customową metodę dla Arraya .select
// podobną do defaultowego działania List w Pythonie

// input:
// - startIdx - index elementu od którego element będzie wybierany
// - endIdx - index elementu od którego element będzie wybierany
// - step - krok opóżnienia w wybieraniu - każdy element / element co drugi, co trzeci, co czwarty, co piąty, co dziesiąty

// w przypadku
// const arr = [0,1,2,3,4,5,6,7,8,9]

// - arr.select(,3,) => [0,1,2]
// - arr.select(1,5,) => [1,2,2,3,4]
// - arr.select(,4,2) => [0,2,4]

// - arr.select(-5,,) => [5,6,7,8,9]
// - arr.select(,-5,) => [0,1,2,3,4]
// - arr.select(-2,-5,) => [5,6,7]

Array.prototype.select = function (startIdx, endIdx, step) {
  const selectedRange = [];
  let i;

  // check step
  if (step === null) {
    step = 1;
  }

  //check endIdx
  if (endIdx === null) {
    endIdx = this.length;
  } else if (endIdx < 0) {
    endIdx = this.length + endIdx;
  }

  //check startIdx
  if (startIdx === null) {
    i = 0;
  } else if (startIdx < 0) {
    i = this.length + startIdx;
  } else {
    i = startIdx;
  }

  for (i; i < endIdx; i += step) {
    selectedRange.push(this[i]);
  }
  return selectedRange;
};

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.select(null, 3, null));
console.log(arr.select(1, 5, null));
console.log(arr.select(null, 4, 2));
console.log(arr.select(-5, null, null));
console.log(arr.select(null, -5, null));
console.log(arr.select(-5, -2, null));
