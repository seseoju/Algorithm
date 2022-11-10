// function solution(dartResult) {
//     const arr = dartResult.match(/(\d+)(\w)([\*/#]?)/g);    
   
//     const nums = [0, 0, 0];
//     arr.forEach((str, i) => {
    
//         if (str[0] == 1 && str[1] == 0) nums[i] = 10;
//         else if (parseInt(str[0])) nums[i] = parseInt(str[0]);
    
//         for (let v of str) {
//             if (v === "S") continue;
//             if (v === "D") nums[i] = nums[i] ** 2;
//             if (v === "T") nums[i] = nums[i] ** 3;
//             if (v === "#") nums[i] *= -1;
//             if (v === "*") {
//                 nums[i] *= 2;
//                 nums[i-1] *= 2;
//             }
//         }
//     })

//     return nums.reduce((sum, cur) => sum + cur, 0);
// }

function solution(dartResult) {
  const scores = dartResult.split(/[^0-9|10]+/g).slice(0, -1);
  const arr = dartResult.split(/[0-9|10]+/g).slice(1);

  const nums = [0, 0, 0];
  scores.forEach((score, i) => {
    const [bonus, option] = arr[i];

    if (bonus === "S") nums[i] = score ** 1;
    if (bonus === "D") nums[i] = score ** 2;
    if (bonus === "T") nums[i] = score ** 3;
    if (option === "#") nums[i] *= -1;
    if (option === "*") {
      nums[i] *= 2;
      nums[i - 1] *= 2;
    }
  });
  return nums.reduce((sum, cur) => sum + cur, 0);
}