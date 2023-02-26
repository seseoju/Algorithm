function solution(n) {
    const dp = [1, 2];
    
    for (let i = 0; i < n; i++) {
        dp.push((dp[i] + dp [i + 1]) % 1_000_000_007);
    }
    
    return dp[n - 1];
}