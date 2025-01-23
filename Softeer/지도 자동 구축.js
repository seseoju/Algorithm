const fs = require('fs')

const step = Number(fs.readFileSync('input.txt', 'utf8').trim())

let points = 4;

for (let i = 0 ; i < step; i++) {
    const num = 2 * Math.sqrt(points) - 1
    
    points = num ** 2
}

console.log(points)
