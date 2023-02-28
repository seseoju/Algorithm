function solution(number, k) {
    const stack = [];
    let count = 0; // 수를 제거한 횟수
    
    for (let i = 0; i < number.length; i++) {
        if (stack.length === 0) {
            stack.push(number[i]);
            continue;
        }
        
        // stack 마지막 요소가 현재 순회중인 요소보다 클때까지 수를 제거한다.
        while (stack.length && stack[stack.length - 1] < number[i]) {
            stack.pop();
            count++;
            
            // 만약 k번 제거했다면 가장 큰 숫자만들기는 끝나므로 리턴
            if (count === k) return stack.join("") + number.slice(i);
        }
        
        stack.push(number[i]);
    }
    
    // "432"와 같이 앞에 큰수로만 이루어져 있는 경우 위의 조건들로 제거가 되지 못한다.
    return stack.join("").slice(0, stack.length - k);
}