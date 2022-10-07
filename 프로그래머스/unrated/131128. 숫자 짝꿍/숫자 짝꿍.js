function solution(X, Y) {
    const mapX = new Map();
    let str = "";
    
    for (const num of X) {
        mapX.set(num, mapX.get(num) + 1 || 1);
    }
    
    for (const num of Y) {
        if (mapX.has(num) && mapX.get(num) > 0) {
            str += num;
            mapX.set(num, mapX.get(num) - 1);
        }
    }
    
    
    if ([...new Set(str)][0] === "0") str = '0';
    else if (!str) str = "-1";
    else str = str.split("").sort((a, b) => b - a).join("");
    return  str;
}