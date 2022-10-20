// Math.ceil(): 주어진 숫자보다 크거나 같은 숫자중 가장 작은 정수를 반환
const solution = (n) => Math.ceil(n / 7);

// const solution = (n) => {
//     if (n <= 7) return 1;
//     return n % 7 === 0 ? n / 7 : Math.trunc(n / 7) + 1;
// }