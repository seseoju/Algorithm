function solution(number, k) {
    let answer = 0;
    let stack = [number[0]];
    const t = number.length - k;
    
    for (let i = 1; i < number.length; i++) {
        if (number[i] <= stack[stack.length - 1]) {
            stack.push(number[i]);
        } else {
            while (stack.length && number[i] > stack[stack.length - 1]) {
                if (stack.length + (number.length - i) === t) break;
                stack.pop();
            }
            if (stack.length + (number.length - i) === t) {
                stack.push(number.slice(i));
                break;
            } else {
                stack.push(number[i]);
            }
        }
    }
    
    answer = stack.join("");
    if (answer.length !== t) answer = answer.slice(0, answer.length - 1);
    
    return answer;
}