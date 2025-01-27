const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [info, ...paths] = fs.readFileSync(filePath).toString().trim().split("\n");

const [_, D] = info.split(" ").map((v) => Number(v));

const pathInfo = {};
const dp = Array.from({length: D + 1}).fill(0);

for (const path of paths) {
  const [start, end, distance] = path.split(" ").map((v) => Number(v));

  if (end > D) continue;

  if (Array.isArray(pathInfo[end])) {
    pathInfo[end].push([start, distance]);
  } else {
    pathInfo[end] = [[start, distance]];
  }
}

for (let end = 1; end <= D; end++) {
  dp[end] = dp[end - 1] + 1;

  const shortPaths = pathInfo[end];

  if (Array.isArray(shortPaths)) {
    for (const shortPath of shortPaths) {
      const [start, distance] = shortPath;

      const newDistance = distance + dp[start];

      dp[end] = Math.min(dp[end], newDistance);
    }
  }
}

console.log(dp[D]);
