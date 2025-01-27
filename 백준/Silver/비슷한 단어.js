const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

const [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

const [target, ...words] = input;

let result = 0;

for (const word of words) {
  let [value, searchValue] = word.length < target.length ? [target, word] : [word, target];

  for (const v of searchValue) {
    value = value.replace(v, "");
  }

  if (value.length <= 1) {
    result += 1;
  }
}

console.log(result);
