function solution(a, b, n) {
    // Math.floor(n / a): 받을 수 있는 콜라의 개수
    // Math.floor(n / a) * a: 가져간 콜라의 개수
    let answer = Math.floor(n / a) * b;
    answer += getCola(n - Math.floor(n / a) * a + Math.floor(n / a) * b);
    
    function getCola(left) {
        if (Math.floor(left / a) === 0) return 0;
        const temp = Math.floor(left / a) * b;
        return temp + getCola(left - Math.floor(left / a) * a + temp);
    }
    
    return answer;
}

