function solution(queue1, queue2) {
    const queue = queue1.concat(queue2);
    const target = queue.reduce((acc, cur) => acc + cur, 0) / 2;
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    
    let start = 0, end = queue1.length - 1, answer = 0;
    while(start < queue.length && end < queue.length) {
        if (sum1 === target) return answer;
        if (sum1 < target && end < queue.length) {
            end += 1;
            sum1 += queue[end];
        } else {
            sum1 -= queue[start];
            start += 1;
        }
        answer += 1;
    }
    
    return -1;
}