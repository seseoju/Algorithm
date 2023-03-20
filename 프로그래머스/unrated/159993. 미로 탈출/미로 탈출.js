function solution(maps) {
    // 시작 지점(S) 찾기
    let start = [0, 0];
    for (let i = 0; i < maps.length; i++) {
        const j = maps[i].indexOf("S");
        if (j !== -1) {
            start = [i, j];
            break;
        }
    }
    
    
    const ROW = maps.length, COL = maps[0].length;
    const count = Array.from({ length: ROW }, () => Array(COL).fill(0));
    let visited = Array.from ({length: ROW}, () => Array(COL).fill(false));
    let isOpen = false;
    let queue = [];
    queue.push(start);
    visited[start[0]][start[1]] = true;
    
    const dirR= [-1, 0, 1, 0];
    const dirC= [0, 1, 0, -1];
    while (queue.length) {
        const [r, c] = queue.shift();
        
        if (maps[r][c] === "L") {
            queue = [];
            visited = Array.from ({length: ROW}, () => Array(COL).fill(false));
            visited[r][c] = true;
            isOpen = true;
        }
        
        if (isOpen && maps[r][c] === "E") return count[r][c];

        for (let i = 0; i < 4; i++) {
            const [newR, newC] = [r + dirR[i], c + dirC[i]];
            if (newR < 0 || newC < 0 || newR >= ROW || newC >= COL) continue;
            
            if (maps[newR][newC] !== "X" && !visited[newR][newC]) {
                count[newR][newC] = count[r][c] + 1;
                visited[newR][newC] = true;
                queue.push([newR, newC]);
            }
        }
    }

    return -1;
}