function solution(my_string, letter) {
    return my_string.split(letter).join("");
}

// function solution(my_string, letter) {
//     let answer = ""; 
    
//     for (const str of my_string) {
//         if (str !== letter) {
//             answer += str;
//         }
//     }
    
//     return answer;
// }