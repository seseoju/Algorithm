function solution(denum1, num1, denum2, num2) {
    let denum = denum1 * num2 + denum2 * num1;
    let num = num1 * num2;
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    const divisor = gcd(denum, num);
    return [denum / divisor, num / divisor];
}