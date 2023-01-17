// function solution(n) {
//     let answer = 0;
    
//     while (n) {
//         if (n % 2 === 0) {
//             n /= 2;
//         } else {
//             n -= 1;
//             answer += 1;
//         }
//     }
    
//     return answer;
// }

function solution(n) {
    let answer = 0;
    
    while (n) {
        if (n % 2 === 1) answer++;
        n = Math.floor(n / 2);
    }
    
    return answer;
}