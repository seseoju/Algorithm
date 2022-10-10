function solution(numbers, hand) {
  let result = "";
  let left = "*",
    right = "#";

  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };

  for (const num of numbers) {
    if (num % 3 === 1) {
      result += "L";
      left = num;
    } else if (num % 3 === 0 && num) {
      result += "R";
      right = num;
    } else {
      const left_dist = Math.abs(keypad[num][0] - keypad[left][0]) + Math.abs(keypad[num][1] - keypad[left][1]);
      const right_dist = Math.abs(keypad[num][0] - keypad[right][0]) + Math.abs(keypad[num][1] - keypad[right][1]);
      if (left_dist < right_dist) {
        result += "L";
        left = num;
      } else if (left_dist > right_dist) {
        result += "R";
        right = num;
      } else {
        if (hand === "left") {
          result += "L";
          left = num;
        } else {
          result += "R";
          right = num;
        }
      }
    }
  }
  return result;
}