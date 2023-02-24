function solution(k, tangerine) {
    let answer = 0;
    const map = new Map();
    
    for (let i = 0; i < tangerine.length; i++) {
        map.set(tangerine[i], map.get(tangerine[i]) + 1 || 1);
    }
    
    const count = Array.from(map, ([_, value]) => value).sort((a, b) => b - a);
    let temp = k;
    
    for (let i = 0; i < count.length; i++) {
        if (count[i] <= temp) {
            temp -= count[i];
        } else {
            temp = 0;
        }
        answer++;
        if (temp === 0) break;
    }
    
    return answer;
}