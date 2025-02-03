// https://www.acmicpc.net/problem/1157

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim();

const upperInput = input.toUpperCase();

const obj = {};

for (const str of upperInput) {
    if (!obj[str]) {
        obj[str] = 0;
    }

    obj[str] += 1;
}

const sortedArr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

const result = sortedArr.length > 1 && sortedArr[0][1] === sortedArr[1][1] ? '?': sortedArr[0][0];
console.log(result);
