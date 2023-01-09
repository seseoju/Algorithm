function solution(people, limit) {
    let answer = 0;
    let start = 0, end = people.length - 1
    people.sort((a, b) => a - b)
    
    while (start <= end) {
        const sum = people[start] + people[end]
        // end에 해당하는 사람은 같이 탈 사람이 없으면 혼자서 타야 하므로 end - 1을 한다.
        if (start !== end-- && sum <= limit) start++
        answer++
    }
    
    return answer
}