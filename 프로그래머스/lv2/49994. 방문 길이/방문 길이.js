// 걸어본 길을 기억해야 한다.
// 경계를 넘어가면 아무일도 일어나지 않는다.

function solution(dirs) {
    let answer = 0;
    const move = { U: [0, 1], D: [0, -1], L: [-1, 0], R: [1, 0]};
    let x = 0, y = 0;
    const set = new Set();
    
    for (const dir of dirs) {
        let nowX = x + move[dir][0];
        let nowY = y + move[dir][1];
        
        if (nowX < -5 || nowX > 5 || nowY < -5 || nowY > 5) continue;
        
        set.add("" + x + y + nowX + nowY);
        set.add("" + nowX + nowY + x + y);
        
        x = nowX;
        y = nowY;
    }
    return set.size / 2;
}




