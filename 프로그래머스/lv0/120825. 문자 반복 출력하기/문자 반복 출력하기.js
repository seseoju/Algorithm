function solution(my_string, n) {
    let answer = "";
    
    for (const str of my_string) {
        answer += str.repeat(n);
    }
    
    return answer;
}