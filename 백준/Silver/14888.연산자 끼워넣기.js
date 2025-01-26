const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map((v) => Number(v));
const operators = input[2].split(" ").map((v) => Number(v));

const operatorFn = {
  0: (a, b) => a + b,
  1: (a, b) => a - b,
  2: (a, b) => a * b,
  3: (a, b) => (a / b < 0 ? -Math.floor(Math.abs(a / b)) : Math.floor(a / b)),
};

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

function getMaxAndMin(currentValue, currentIdx, operators) {
  if (currentIdx === n - 1) {
    max = Math.max(max, currentValue);
    min = Math.min(min, currentValue);

    return;
  }

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === 0) continue;

    const newOperators = [...operators];
    newOperators[i]--;

    const calculate = operatorFn[i];
    getMaxAndMin(calculate(currentValue, nums[currentIdx + 1]), currentIdx + 1, newOperators);
  }
}

getMaxAndMin(nums[0], 0, operators);

console.log(max === 0 ? Math.abs(max) : max);
console.log(min === 0 ? Math.abs(min) : min);
