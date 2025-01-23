// 1 (O(N * M))
const fs = require('fs')

const [info, score, ...intervals] = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map((el) => el.split(' ').map((v) => Number(v)))

const [N, K] = info;

for (interval of intervals) {
    const [start, end] = interval;
    const cnt = end - start + 1;

    let sum = 0;

    for (i = start - 1; i < end; i++) {
        sum += score[i]
    }

    const avg = (sum / cnt).toFixed(2)
    console.log(avg)
}

// 2 (누적합) (O(N))
const fs = require('fs')

const [info, score, ...intervals] = fs.readFileSync('input.txt', 'utf8').trim().split('\n').map((el) => el.split(' ').map((v) => Number(v)))

const [N, K] = info

const accSum = Array(N + 1).fill(0)

for (let i = 1; i <= N; i++) {
    accSum[i] = accSum[i - 1] + score[i - 1]
}

for (const interval of intervals) {
    const [start, end] = interval

    const sum = accSum[end] - accSum[start - 1]
    const cnt = end - start + 1

    const avg = (sum / cnt).toFixed(2)

    console.log(avg)
}
