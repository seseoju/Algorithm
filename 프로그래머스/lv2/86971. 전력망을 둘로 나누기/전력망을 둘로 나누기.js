function solution(n, wires) {
    let answer = Infinity;
    const tree = {};
    
    // 1. 노드 정보를 저장한다.
    for (const [v1, v2] of wires) {
        tree[v1] = tree[v1] ? [...tree[v1], v2] : [v2];
        tree[v2] = tree[v2] ? [...tree[v2], v1] : [v1];
    }

    for (const [v1, v2] of wires) {
        // 2. 전선을 하나씩 끊어본다.
        const disconnectedTree = {...tree};
        disconnectedTree[v1] = disconnectedTree[v1].filter((v) => v !== v2);
        disconnectedTree[v2] = disconnectedTree[v2].filter((v) => v !== v1);
        
        const v1Count = dfs(disconnectedTree, v1);
        const v2Count = n - v1Count;
        answer = Math.min(answer, Math.abs(v1Count - v2Count));
    }
    return answer;
}

function dfs(tree, start) {
    let count = 0;
    const visited = {};
    const stack = [start];
    
    while (stack.length) {
        const node = stack.pop();
        
        if (!visited[node]) {
            visited[node] = true;
            stack.push(...tree[node]);
            count += 1;
        }
    }
    
    return count;
}