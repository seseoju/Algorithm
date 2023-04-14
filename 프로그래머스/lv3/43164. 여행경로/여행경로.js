function solution(tickets) {
    const infos = {};
    for (const [start, end] of tickets) {
        infos[start] = (infos[start] || []).concat(end);
    }
    
    for (const key in infos) {
        infos[key].sort((a, b) => a > b ? -1 : 1); // 알파벳 순으로 pop 하도록 역정렬
    }
    
    const answer = [];
    const stack = ["ICN"];
    
    while (stack.length > 0) {
        const now = stack[stack.length - 1];
        if (infos[now] && infos[now].length > 0) {
            stack.push(infos[now].pop()); // 더 이상 해당 도시에서 방문할 도시가 없을 때까지 stack에 저장
        } else { 
            answer.push(stack.pop());
        }
    }
    
    return answer.reverse();
    
}