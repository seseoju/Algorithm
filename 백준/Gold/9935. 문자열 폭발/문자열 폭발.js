const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, b] = fs.readFileSync(filePath).toString().split("\n");

function getLeftStr(str, bomb) {
  const stack = [];
  const N = bomb.length;
  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    if (str[i] === bomb[N - 1]) {
      const subStr = stack.slice(-N);
      if (subStr.join("") === bomb) stack.splice(-N);
    }
  }

  return stack.length === 0 ? "FRULA" : stack.join("");
}

console.log(getLeftStr(a, b));
