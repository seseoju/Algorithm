function solution(s) {
    let result = 0;
    let x = [];
    let notX = [];

    for (const str of s) {
        if (!x.length || x[x.length -1] === str) x.push(str);
        if (x[x.length - 1] !== str) notX.push(str);
        if (x.length === notX.length) {
            result += 1;
            x = [];
            notX = [];
        }
    }
    
    if (x.length) result++;
    
    return result;
}