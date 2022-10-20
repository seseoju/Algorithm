function solution(n) {
    
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    const lcm = n * 6 / gcd(n, 6);
    return lcm / 6;
}