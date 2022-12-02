function solution(chicken) {
    let num = 0; // 최대 서비스 치킨의 수
    
    while (chicken >= 10) {
        num += parseInt(chicken / 10);
        chicken = parseInt(chicken / 10) + chicken % 10;
    }
    
    return num;
}