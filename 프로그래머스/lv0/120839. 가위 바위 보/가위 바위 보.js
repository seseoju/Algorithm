// function solution(rsp) {
//     let answer = "";
//     for (const num of rsp) {
//         if (num === "2") {
//             answer += "0";
//         } else if (num === "0") {
//             answer += "5";
//         } else {
//             answer += "2";
//         }
//     }
//     return answer;
// }

function solution (rsp) {
    const rspInfo = {
        2: 0,
        0: 5,
        5: 2
    };
    
    return [...rsp].map(v => rspInfo[v]).join("");
}