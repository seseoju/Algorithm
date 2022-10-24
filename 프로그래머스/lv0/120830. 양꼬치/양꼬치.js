function solution(n, k) {
    return n * 12000 + (k - Math.trunc(n / 10)) * 2000;
}