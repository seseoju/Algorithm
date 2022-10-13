function solution(skill, skill_trees) {
    const regex = new RegExp(`[${skill}]`, 'g');
    let result = 0;
    let arr = [];
    
    for (const i of skill_trees) {
       if (i.match(regex)) {
           arr = [...arr, i.match(regex)];
       } else {
           result++;
       }
    }
    
    const skillArr = skill.split("");
    for (const i of arr) {
        let num = -1;
        for (const v of i) {
            const skillIdx = skillArr.indexOf(v);
            if (skillIdx - num >= 2) {
                num = -1;
                break;
            }    
            num = skillIdx;
        }
        if (num !== -1) result += 1;
    }
    return result;
}