/** 
* 곱이 크려면 n개의 자연수 간 편차가 적어야 한다.
* ex) 9 / 2 = 4 ''' 1 일때, 몫이 n개의 자연수 중 하나의 값이 되었을 때, 편차가 가장 적어진다. 몫을 하나의 값으로 가진 후 나머지를 고르게 분포하면 되기 때문이다.
* [몫, 몫 + 1] => [4, 5] => 4 x 5 = 20
* ex) 15 / 4 = 3 ''' 3
* [몫, 몫 + 1, 몫 + 1, 몫 + 1] => [3, 4, 4, 4] => 3 x 4 x 4 x 4 = 192
* s / n의 몫이 없다면 자연수 n개의 합으로 s를 만들 수 없으므로 이때 1을 반환한다.
*/

function solution(n, s) {
    const maxNum = s / n >> 0; // zero right shift로 소수점 버림 가능
    
    if (!maxNum) return [-1]; 
    
    const rest = s % n;
    return Array(n - rest).fill(maxNum).concat(Array(rest).fill(maxNum + 1));
}
