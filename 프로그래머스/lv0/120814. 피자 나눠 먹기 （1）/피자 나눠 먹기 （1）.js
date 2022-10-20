const solution = (n) => {
    if (n <= 7) return 1;
    return n % 7 === 0 ? n / 7 : Math.trunc(n / 7) + 1;
}