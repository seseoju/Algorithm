function solution(survey, choices) {
    let answer = "";
    const indicator = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]];
    let map = new Map();
    
    for (let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i];
        
        switch (choices[i]) {
            case 1:
                map.set(disagree, map.get(disagree) + 3 || 3);
                break;
            case 2:
                map.set(disagree, map.get(disagree) + 2 || 2);
                break;
            case 3:
                map.set(disagree, map.get(disagree) + 1 || 1);
                break;
            case 5:
                map.set(agree, map.get(agree) + 1 || 1);
                break;
            case 6:
                map.set(agree, map.get(agree) + 2 || 2);
                break;
            case 7:
                map.set(agree, map.get(agree) + 3 || 3);
                break;
        }
    }

    for (const types of indicator) {
        const scoreL = map.get(types[0]) || 0;
        const scoreR = map.get(types[1]) || 0;
        answer += (scoreL >= scoreR) ? types[0] : types[1];
    }
    return answer;
}