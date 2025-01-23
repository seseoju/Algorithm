const fs = require('fs')
const input = fs.readFileSync('input.txt', 'utf8').trim().split('\n')

const order = input[0].split(' ').map((v) => Number(v))

const min = 1
const max = 8

let result = 'mixed'

if (order[min - 1] === min && order[max - 1] === max) {
    result = 'ascending'
}

if (order[min - 1] === max && order[max - 1] === min) {
    result = 'descending'
}

for (let i = 1; i <= 6; i++) {
    if (Math.abs(order[i] - order[i - 1]) !== 1){
        result = 'mixed'
    }
}

console.log(result)
