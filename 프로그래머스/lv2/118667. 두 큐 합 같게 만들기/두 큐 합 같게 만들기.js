function solution(queue1, queue2) {
    const queue = queue1.concat(queue2);
    const target = queue.reduce((arr, cur) => arr + cur) / 2;
    
    let sum1 = queue1.reduce((arr, cur) => arr + cur);

    
    let start = 0, end = queue1.length - 1, count = 0;
    
    while (start < queue.length && end < queue.length) {
        if (sum1 === target) return count;
        else if (sum1 < target && end < queue.length) {
            end++;
            sum1 += queue[end];
        }
        else {
            sum1 -= queue[start];
            start++;
        }
        count++;
    }
    return -1;
}