const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, ...b] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);

function solution(arr, n) {
  const frequency = new Map();
  for (const str of arr) {
    frequency.set(str, (frequency.get(str) || 0) + 1);
  }

  const s = arr.slice(0, n);
  return s.reduce((acc, cur) => {
    if (frequency.get(cur) > 1) return acc + frequency.get(cur) - 1;
    return acc;
  }, 0);
}

console.log(solution(b, n));
