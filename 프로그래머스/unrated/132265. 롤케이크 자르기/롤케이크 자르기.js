function solution(topping) {
    let answer = 0;
    
    const older = new Map(); // 형
    const younger = new Map(); // 동생
    
    for (const num of topping) {
        older.set(num, older.get(num) + 1 || 1);
    }
    
    for (const num of topping) {
        if (older.has(num)) {
            older.set(num, older.get(num) - 1);
            if (older.get(num) === 0) {
                older.delete(num);
            }
        }
        younger.set(num, younger.get(num) + 1 || 1);
        if (older.size === younger.size) answer++;
    }
    
    return answer;
}