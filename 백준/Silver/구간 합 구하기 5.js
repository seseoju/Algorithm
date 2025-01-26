const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [info, ...rest] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = info.split(" ").map((v) => Number(v));

const table = rest.slice(0, N).map((el) => el.split(" ").map((v) => Number(v)));

const dp = Array.from({length: N + 1}, (v) => Array.from({length: N + 1}).fill(0));

// 누적합 dp
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] = dp[i - 1][j] + dp[i][j - 1] - dp[i - 1][j - 1] + table[i - 1][j - 1];
  }
}

const coords = rest.slice(N).map((el) => el.split(" ").map((v) => Number(v)));

for (const coord of coords) {
  const [x1, y1, x2, y2] = coord;

  const result = dp[x2][y2] - dp[x1 - 1][y2] - dp[x2][y1 - 1] + dp[x1 - 1][y1 - 1];
  console.log(result);
}
