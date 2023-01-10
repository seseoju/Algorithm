function solution(want, number, discount) {
    let answer = 0;
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const period = discount.slice(i, i + 10);
        
        const cart = new Map();
        period.forEach((item) => cart.set(item, (cart.get(item) || 0) + 1));
        const isDiscount = want.every((item, idx) => number[idx] === cart.get(item));
        if (isDiscount) answer++;
    }
    
    return answer;
}