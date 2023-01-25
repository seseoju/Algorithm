function solution(w, h) {
    let halfCount = 0;
    
    for (let i = 1; i < w; i++) {
        halfCount += Math.floor(h * i / w);
    }
    
    return halfCount * 2;
}

// h / w * i 시 테스트 케이스 6번 실패 이유
// 소수점 / 소수점의 계산이 명확하지 않기 때문.