function solution(begin, target, words) {
    if (!words.includes(target)) return 0;
    
    let visited = { [begin]: 0 };
    const queue = [begin];
    
    while (queue.length) {
        const cur = queue.shift();
        
        if (cur === target) break;
        
        const newWords = words.filter(word => isChangeableWords(cur, word) && !visited[word]);
        
        for (const word of newWords) {
            visited[word] = visited[cur] + 1;
            queue.push(word);
        }    
    }
    return visited[target];
}

function isChangeableWords(current, word) {
    let count = 0;
    for (let i = 0; i < current.length; i++) {
        if (current[i] !== word[i]) count += 1;
    }
    return count === 1 ? true : false;
}