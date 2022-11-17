function solution(A,B){
    // A는 오름차순으로 정렬한다.
    // B는 내림차순으로 정렬한다.
    // A, B의 첫법째 숫자부터 차례로 곱하여 곱한 값을 누적한다.
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    
    return A.reduce((sum, value, idx) => sum + value * B[idx], 0);

}