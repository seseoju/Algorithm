const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, ...b] = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = a.split(" ").map(Number);

function solution(arr, n, m) {
  const s = new Set();
  let answer = 0;

  for (let i = 0; i < n; i++) {
    s.add(arr[i]);
  }

  for (let i = n; i < n + m; i++) {
    if (s.has(arr[i])) answer++;
  }
  return answer;
}

console.log(solution(b, n, m));
