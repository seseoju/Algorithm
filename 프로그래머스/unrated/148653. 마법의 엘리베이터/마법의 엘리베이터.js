function solution(storey) {
    let result = 0;
    
    while (storey) {
        const num = storey % 10;

        if (num >= 6) { // 현재 자릿수가 6 이상이면 +
            storey += 10 - num;
            result += 10 - num;
        } else if (num === 5 && Math.floor(storey / 10) % 10 >= 5) { // 현재 자릿수가 5이고, 바로 앞자릿수가 5이상이면 +
            storey += 10 - num;
            result += 10 - num;
        } else { // 현재 자릿수가 5 이하이면 -
            result += num;
        }
        storey = Math.floor(storey / 10);
        
    }
    
    return result;
}