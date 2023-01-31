function solution(k, score) {
    const honor = [];
    const result = [];
    
    for (const num of score) {
        honor.push(num);
        honor.sort((a, b) => b - a);
        if (honor.length > k) {
            honor.pop();
        }
        result.push(honor[honor.length - 1]);
    }
    
    return result;
}