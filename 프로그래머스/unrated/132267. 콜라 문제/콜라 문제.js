function solution(a, b, n) {
    // parseInt(n / a) * b: 받을 수 있는 콜라의 개수
    // parseInt(n / a) * a: 가져간 콜라의 개수
    // 들고가고 남은 콜라수: n % a
    
    let answer = 0;
    
    answer += getCola(n);
    
    function getCola(left) {
        if (left < a) return 0;
        const received = parseInt(left / a) * b;
        return received + getCola(left % a + received);
    }
    
    return answer;
}