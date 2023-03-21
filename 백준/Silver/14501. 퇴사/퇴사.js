const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ..._schedule] = fs.readFileSync(filePath).toString().split("\n");
const schedule = _schedule.map((info) => info.split(" ").map(Number));

// Bottom-Up
function solution(n, schedule) {
  const dp = Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + schedule[i][0]; j < N + 1; j++) {
      if (dp[j] < dp[i] + schedule[i][1]) {
        dp[j] = dp[i] + schedule[i][1];
      }
    }
  }

  return dp[dp.length - 1];
}
console.log(solution(Number(N), schedule));