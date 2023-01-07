function solution(s) {
    let x = s;
    const answer = [0, 0];

    while (x !== "1") {
        const removedZeroLen = [...x].filter((n) => +n).join("").length;
        answer[1] += x.length - removedZeroLen;
        x = removedZeroLen.toString(2);
        answer[0] += 1;
    }
    
    return answer;
}

