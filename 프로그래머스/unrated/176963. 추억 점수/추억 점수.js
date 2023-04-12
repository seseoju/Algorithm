function solution(name, yearning, photo) {
    const score = {};
    const result = [];
    
    for (let i = 0; i < name.length; i++) {
        score[name[i]] = yearning[i];
    }
    
    for (const list of photo) {
        const sum = list.reduce((acc, cur) => {
            if (score[cur]) return score[cur] + acc;
            return acc
        }, 0);
        result.push(sum);
    }
    
    return result;
}