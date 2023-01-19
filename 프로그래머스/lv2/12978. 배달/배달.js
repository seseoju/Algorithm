function solution(N, road, K) {
    const graph = Array(N + 1).fill([]);
    const timeList = Array(N + 1).fill(500001);
    const queue = [];
    
    timeList[1] = 0;
    
    road.forEach(([a, b, c]) => {
        graph[a] = [...graph[a], [b, c]];
        graph[b] = [...graph[b], [a, c]];
    })

    queue.push(1);
    
    while (queue.length) {
        const num = queue.shift();
        
        graph[num].forEach(([node, time]) => {
            if (timeList[node] > time + timeList[num]) {
                timeList[node] = time + timeList[num];
                queue.push(node);
            }
        })
    }
        
    return timeList.filter((time) => time <= K).length;
}