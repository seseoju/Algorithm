function solution(s) {
    const answer = [0, 0];

    while (s !== "1") {
        // const removedZeroLen = [...s].filter((n) => +n).join("").length;
        const removedZeroLen = s.replace(/0/g, '').length;
        answer[1] += s.length - removedZeroLen;
        s = removedZeroLen.toString(2);
        answer[0] += 1;
    }
    
    return answer;
}

