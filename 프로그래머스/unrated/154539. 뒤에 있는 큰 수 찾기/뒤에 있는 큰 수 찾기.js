function solution(numbers) {
    const stack = [];
    const result = Array(numbers.length).fill(-1);
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        while (numbers[i] >= stack[stack.length - 1]) stack.pop();
        if (numbers[i] < stack[stack.length - 1]) result[i] = stack[stack.length - 1];
        stack.push(numbers[i]);
    }
    
    return result;
}