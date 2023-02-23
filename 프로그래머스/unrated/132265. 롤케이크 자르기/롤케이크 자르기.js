function solution(topping) {
    let answer = 0;
    
    const older = new Map(); // 형
    const younger = new Map(); // 동생
    
    // 형이 일단 롤케이크를 다 가져간다.
    for (const num of topping) {
        older.set(num, older.get(num) + 1 || 1);
    }
    
    // 다시 배열을 순회하면서 현재 순회중인 토핑을 동생 Map에 저장.
    for (const num of topping) {
        if (older.has(num)) {
            older.set(num, older.get(num) - 1);
            if (older.get(num) === 0) {
                older.delete(num);
            }
        }
        younger.set(num, younger.get(num) + 1 || 1);
        // 형, 동생 Map 크키 같으면 동일한 가짓수의 토핑을 가진 것
        if (older.size === younger.size) answer++;
    }
    
    return answer;
}
