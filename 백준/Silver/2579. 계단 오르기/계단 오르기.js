const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [n, ..._arr] = fs.readFileSync(filePath).toString().split("\n");
const N = Number(n);
const arr = _arr.map(Number);

const memo = Array(N).fill(0);

function main() {
  memo[0] = arr[0];
  memo[1] = arr[0] + arr[1];
  memo[2] = Math.max(arr[0], arr[1]) + arr[2];

  for (let i = 3; i < N; i++) {
    memo[i] = Math.max(memo[i - 2], memo[i - 3] + arr[i - 1]) + arr[i];
  }
  return memo[N - 1];
}

console.log(main());
