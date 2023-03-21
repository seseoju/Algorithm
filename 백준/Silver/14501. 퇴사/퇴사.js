const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [N, ..._schedule] = fs.readFileSync(filePath).toString().split("\n");
const schedule = _schedule.map((info) => info.split(" ").map(Number));

// Top-Down
function solution(n, schedule) {
  const dp = Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    if (i + schedule[i][0] > n) {
      dp[i] = dp[i + 1];
    } else {
      dp[i] = Math.max(dp[i + 1], schedule[i][1] + dp[i + schedule[i][0]]);
    }
  }

  return dp[0];
}
console.log(solution(Number(N), schedule));