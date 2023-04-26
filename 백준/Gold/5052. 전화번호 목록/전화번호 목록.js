const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [t, ...tc] = fs.readFileSync(filePath).toString().trim().split("\n");

// 테스트 케이스 형식 만들기
let idx = 0;
const testCases = [];
while (idx < tc.length) {
  const n = +tc[idx];
  testCases.push(tc.slice(idx + 1, idx + 1 + n));
  idx += n + 1;
}

for (let i = 0; i < +t; i++) {
  testCases[i].sort(); // "911", "91125426", "97625999"와 같이 문자열 정렬해 접두어 비교

  let answer = "YES";
  for (let j = 1; j < testCases[i].length; j++) {
    const prev = testCases[i][j - 1];
    const now = testCases[i][j];

    if (now.startsWith(prev)) {
      answer = "NO";
      break;
    }
  }
  console.log(answer);
}
