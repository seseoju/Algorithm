// https://www.acmicpc.net/problem/11501

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [t, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(t);

for (let i = 0; i < T * 2; i += 2) {
  const len = Number(input[i]);
  const prices = input[i + 1].split(" ").map((v) => Number(v));

  let profit = 0; // 이익
  let maxPrice = 0; // 최대 가격

  for (let j = len - 1; j >= 0; j--) {
    const price = prices[j];

    if (price > maxPrice) {
      maxPrice = price;
    }

    profit += maxPrice - price;
  }

  console.log(profit);
}
