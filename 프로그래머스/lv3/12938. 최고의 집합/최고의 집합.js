function solution(n, s) {
    const maxNum = s / n >> 0;
    
    if (!maxNum) return [-1];
    
    const rest = s % n;
    return Array(n - rest).fill(maxNum).concat(Array(rest).fill(maxNum + 1));
}