const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [_n, pattern, ...files] = fs.readFileSync(filePath).toString().trim().split("\n");
const n = Number(_n);

function solution(pattern, files) {
  const [start, end] = pattern.split("*");
  let answer = "";

  for (const file of files) {
    const head = file.substring(0, start.length);
    const tail = file.substring(file.length - end.length);

    if (file.length < start.length + end.length) answer += "NE\n";
    else if (start === head && end === tail) answer += "DA\n";
    else answer += "NE\n";
  }

  return answer.trim();
}

console.log(solution(pattern, files));
