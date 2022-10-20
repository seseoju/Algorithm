function solution(array) {
    const map = new Map();
    
    array.forEach((num) => {
        map.set(num, map.get(num) + 1 || 1);
    })
    const modeNum = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));
    return map.get(modeNum[0]) === map.get(modeNum[1]) ? -1 : modeNum[0];
}