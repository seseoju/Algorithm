function solution(info, query) {
    let answer = [];
    const infos = getInfos(info);

    const filteredQuery = query.map(v => v
        .split(/ and | |-/)
        .filter(v => v !== ""));
    
    for (const query of filteredQuery) {
        const score = query.pop();
        const count = getApplicantCount(infos, query, score);
        answer.push(count);
    }
    
    return answer;
}

function binarySearch(arr, target) {
    let start = 0, end = arr.length - 1, mid = Math.floor((start + end) / 2);
    
    while (start <= end) {
        if (arr[mid] === target) return mid;
        arr[mid] < target ? start = mid + 1 : end = mid - 1;
        mid = Math.floor((start + end) / 2);
    }
    
    return mid + 1;
}

function getApplicantCount(infos, query, score) {
    return Object.keys(infos)
        .filter(key => query.every(v => key.includes(v)))
        .reduce((acc, cur) => acc + infos[cur].length - binarySearch(infos[cur], score), 0);
}
    
function getInfos(info) {
    const infos = {};
    
    // "언어지원직군지원경력소울푸드"를 키로 갖도록 만든다.
    for (const list of info) {
        const conditions = list.split(" ");
        const score = Number(conditions.pop());
        const key = conditions.join("");
        infos[key] = (infos[key] || []).concat(score);
    }
    
    // 이분 탐색을 위해 미리 정렬
    for (const key in infos) {
        infos[key].sort((a, b) => a - b);
    }
    
    return infos;
}