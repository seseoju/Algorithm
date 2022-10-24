function solution(num_list) {
    const answer = [0, 0];
    
    for (const num of num_list) {
        answer[num % 2] += 1;
    }
    return answer;
}

// function solution(num_list) {
//     let [even, odd] = [0, 0];
    
//     for (const num of num_list) {
//         num % 2 === 0 ? even++ : odd++;
//     }
//     return [even, odd];
// }