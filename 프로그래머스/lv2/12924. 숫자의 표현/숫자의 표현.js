function solution(n) {
    if (n < 3) return 1;
    let answer = 1, left = 1, right = 2, sum = left + right;
    
    while (right < n) {
        if (sum < n) {
            sum += ++right;
            continue;
        }
        if (sum === n) {
            answer++;
            if (right - left === 1 && left + right === n) break;
        }
        sum -= left++;

    }
    
    return answer;
}