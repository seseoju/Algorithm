// https://www.acmicpc.net/problem/2292

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(filePath).toString().trim();

const num = Number(input);

function getRoomCount(cnt, min) {
  let max = min - 1 + 6 * (cnt - 1);

  // 1 예외처리
  if (max === 0) max += 1;

  if (min <= num && num <= max) {
    return cnt;
  }

  return getRoomCount(cnt + 1, max + 1);
}

console.log(getRoomCount(1, 1));
