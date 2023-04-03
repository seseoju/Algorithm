const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [a, ...b] = fs.readFileSync(filePath).toString().trim().split("\n");

function getFileExtensions(n, filePaths) {
  const map = new Map();
  const sortedExtensions = [];

  for (const filePath of filePaths) {
    const extension = filePath.match(/\.([0-9a-z]+)$/i)[1];
    map.set(extension, (map.get(extension) || 0) + 1);
  }

  for (const key of map.keys()) {
    sortedExtensions.push(`${key} ${map.get(key)}`);
  }

  let answer = sortedExtensions.sort();
  return answer.join("\n");
}

console.log(getFileExtensions(a, b));
