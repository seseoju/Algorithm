function solution(picks, minerals) {
    const N = minerals.length;
    const keys = { "diamond": 0, "iron": 1, "stone": 2 };
    const fatigues = {
        0: [1, 1, 1],
        1: [5, 1, 1],
        2: [25, 5, 1],
    };
    const queue = [];
    queue.push({idx: 0, fatigue: 0, picks: picks.map(v => v)});
    let answer = Infinity;
    
    while (queue.length) {
        const { idx, fatigue, picks } = queue.shift();
        
        // 종료 조건
        if (idx >= N || picks.every(count => count === 0)) {
            answer = Math.min(answer, fatigue);
            continue;
        }
        
        for (let i = 0; i < 3; i++) {
            if (picks[i] === 0) continue;
            let sum = fatigue;
            for (let j = 0; j < Math.min(5, N - idx); j++) {
                const key = keys[minerals[idx + j]];
                sum += fatigues[i][key];
            }
            
            queue.push({ idx: idx + 5, fatigue: sum, picks: picks.map((count, index) => i === index ? count - 1 : count) });
        }
    }
    return answer;
}