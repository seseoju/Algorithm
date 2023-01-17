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

// function solution(n) {
//     let answer = 0;
    
//     while (n) {
//         if (n % 2 === 1) answer++;
//         n = Math.floor(n / 2);
//     }
    
//     return answer;
// }

// 어떠한 수를 2로 나누고, 그 몫을 또 2로 계속해서 나누면서 나오는 나머지들의 모든 합은 어떠한 수를 이진수로 변환한 수의 1의 개수와 같다
function solution(n) {
    if (n === 1) return 1;
    
    const binaryArr = [...n.toString(2)];
    return binaryArr.reduce((acc, cur) => acc + (+cur), 0)
}