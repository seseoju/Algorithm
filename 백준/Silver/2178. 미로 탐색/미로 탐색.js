const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [info, ..._grid] = fs.readFileSync(filePath).toString().split("\n");
const [N, M] = info.split(" ").map(Number);
const grid = _grid.map((row) => row.split("").map(Number));

function solution(row, col, grid) {
  const dirR = [-1, 0, 1, 0];
  const dirC = [0, 1, 0, -1];
  const queue = [[0, 0]];
  const visited = Array.from({length: row}, () => Array(col).fill(0));
  visited[0][0] = 1;

  while (queue.length !== 0) {
    const [r, c] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [newR, newC] = [r + dirR[i], c + dirC[i]];
      if (newR < 0 || newC < 0 || newR >= row || newC >= col) continue; // 미로를 벗어나면 탐색 제외
      if (grid[newR][newC] && !visited[newR][newC]) {
        // 이동할 수 있는 칸이고, 방문하지 않은 칸이면 방문
        visited[newR][newC] = visited[r][c] + 1;
        queue.push([newR, newC]);
      }
    }
  }

  return visited[row - 1][col - 1];
}

console.log(solution(N, M, grid));
