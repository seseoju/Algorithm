function solution(i, j, k) {
    return [...getRangeStr(i, j)].filter(v => v == k).length;
}

function getRangeStr(start, end) {
    return Array(end - start + 1).fill(start).map((v, i) => v + i).join("");
}