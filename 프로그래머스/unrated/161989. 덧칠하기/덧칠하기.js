function solution(n, m, section) {
    let answer = 0, max = 0;
    
    for (let num of section) {
        if (num > max) {
            answer++;
            max = num + m - 1;
        }
    }
    
    return answer;
}