const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [num, ..._info] = fs.readFileSync(filePath).toString().split("\n");
const [N, K] = num.split(" ").map(Number);
const info = _info.map((el) => el.split(" ").map(Number));

function getMaxValue(n, k, info) {
  const dp = Array.from({length: n + 1}, () => Array(k + 1).fill(0));

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < k + 1; j++) {
      const notTakingVal = dp[i - 1][j]; // 배낭안에 특정 물건이 없는 경우의 최댓값
      const [weight, value] = info[i - 1];

      let takingVal = 0; // 배낭안에 특정 물건이 있는 경우의 최댓값
      takingVal = j - weight < 0 ? 0 : dp[i - 1][j - weight] + value;

      dp[i][j] = Math.max(notTakingVal, takingVal);
    }
  }
  return dp[n][k];
}

console.log(getMaxValue(N, K, info));
