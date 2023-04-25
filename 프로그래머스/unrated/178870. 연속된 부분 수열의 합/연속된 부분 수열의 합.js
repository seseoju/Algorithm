function solution(sequence, k) {
    let result = [];
    let sum = 0;
    let end = 0;
    
    for (let start = 0; start < sequence.length; start++) {
        while (end < sequence.length && sum < k) {
            sum += sequence[end];
            end += 1;
        }
        
        if (sum === k) {
            if (!result.length) {
                result = [start, end - 1];
            } else {
                result = result[1] - result [0] > end - 1 - start ? [start, end - 1] : result;
            }
        }
        sum -= sequence[start];
    }
    return result;
}
