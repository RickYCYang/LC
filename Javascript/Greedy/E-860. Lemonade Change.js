/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let [fives, tens, twenties] = [0, 0, 0];
  for (const bill of bills) {
    if (bill === 5) {
      fives++;
      continue;
    }
    if (bill === 10) {
      fives--, tens++;
      if (fives < 0) return false;
      continue;
    }

    // bill == 20
    if (tens > 0 && fives > 0) {
      tens--, fives--;
      continue;
    }
    if (tens === 0 && fives >= 3) {
      fives -= 3;
      continue;
    }

    return false;
  }

  return true;
};
