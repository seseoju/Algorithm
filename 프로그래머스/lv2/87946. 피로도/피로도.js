function solution(k, dungeons) {
    const cases = getPermutations(dungeons, dungeons.length);
    let answer = 0;
    
    cases.forEach(list => {
        let now = k, count = 0;
        
        for (let i = 0; i < list.length; i++) {
            const [min, use] = list[i];
            if (now < min) break;
          
            count += 1;
            now -= use;
        }
        
        answer = Math.max(answer, count)
    })
    return answer;
}

// 던전을 탐험하는 경우의 수를 순열로 구한다.
function getPermutations (arr, selectNum) {
    if (selectNum === 1) return arr.map(el => [el]);
    
    const result = [];
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
        const permutations = getPermutations(rest, selectNum - 1);
        const attached = permutations.map((el) => [fixed, ...el])
        result.push(...attached)
    })
    
    return result;
}