function solution(number) {
    let result = 0;
    
    function combination(cur, idx) {
        if (cur.length === 3) {
            result += (cur.reduce((acc, cur) => acc + cur) === 0) && 1;
            return;
        }
        
        for (let i = idx; i < number.length; i++) {
            combination([...cur, number[i]], i + 1);
        }
    }

    combination([], 0);
    return result;
}