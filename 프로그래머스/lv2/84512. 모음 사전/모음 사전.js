function solution(word) {
    let answer = {};
    const vowel = ["A", "E", "I", "O", "U"];
    let idx = 0;
    
    const dfs = (prev, n) => {
        if (n > 5) return;
        
        // 사전에 등록된 단어를 방문한 순서를 기록한다.
        answer[prev] = idx++;
        for (let i = 0; i < 5; i++) {
            const next = prev + vowel[i];
            dfs(next, n + 1);
        }
    };
    
    dfs("", 0);
    return answer[word];
}

