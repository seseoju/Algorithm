const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [counts, ..._info] = fs.readFileSync(filePath).toString().trim().split("\n");
const [N, M] = counts.split(" ").map(Number);
const info = _info.map((info) => info.split(" ").slice(1).map(Number));

function solution(n, m, switches) {
  const lamps = Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < switches[i].length; j++) {
      lamps[switches[i][j] - 1] += 1;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < switches[i].length; j++) {
      lamps[switches[i][j] - 1] -= 1;
    }

    let isOn = true;
    for (let j = 0; j < m; j++) {
      if (lamps[j] < 1) isOn = false;
    }

    if (isOn === true) {
      return 1;
    }

    for (let j = 0; j < switches[i].length; j++) {
      lamps[switches[i][j] - 1] += 1;
    }
  }

  return 0;
}

console.log(solution(N, M, info));
