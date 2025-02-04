// https://www.acmicpc.net/problem/14940

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [info, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = info.split(" ").map((v) => Number(v));

// 1. 목표 지점을 찾는다.
const target = input.find((str) => str.includes("2"));

const targetN = input.indexOf(target);
const targetM = target.replaceAll(" ", "").indexOf("2");

const arr = input.map((row) => row.split(" ").map((v) => Number(v)));
const distance = Array.from({length: N}, () => Array.from({length: M}, () => -1));
const visited = Array.from({length: N}, () => Array.from({length: M}, () => false));

const operation = {
  0: [-1, 0],
  1: [1, 0],
  2: [0, -1],
  3: [0, 1],
};

const queue = [{n: targetN, m: targetM, dis: 0}];

while (queue.length > 0) {
  const {n, m, dis} = queue.shift();

  let isNoRoute = true;

  for (let i = 0; i < 4; i++) {
    const posN = n + operation[i][0];
    const posM = m + operation[i][1];

    // 2. 방문하지 않은 갈 수 있는 곳(1)을 찾는다.
    if (visited[posN]?.[posM] === false && arr[posN]?.[posM] === 1) {
      queue.push({n: posN, m: posM, dis: dis + 1});
      visited[posN][posM] = true;
    }

    // 3. 한 방향이라도 갈 수 있는지 확인한다.
    if (posN >= 0 && posN < N && posM >= 0 && posM < M && arr[posN]?.[posM] !== 0 && distance[posN]?.[posM] !== -1) {
      isNoRoute = false;
    }
  }

  // 4. 각 조건에 맞는 최소 거리 계산
  distance[n][m] = dis;

  if (arr[n][m] === 0 || arr[n][m] === 2) {
    distance[n][m] = 0;
    continue;
  }
  
  if (isNoRoute) {
    distance[n][m] = -1;
  }
}

const result = distance.map((el, n) => el.map((v, m) => (arr[n][m] === 0 ? 0 : v)).join(" ")).join("\n");

console.log(result);

