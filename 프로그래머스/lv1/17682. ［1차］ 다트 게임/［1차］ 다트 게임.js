function solution(dartResult) {
    const arr = dartResult.match(/(\d+)(\w)([\*/#]?)/g);    
    
    const nums = [0, 0, 0];
    arr.forEach((str, i) => {
        if (str[0] == 1 && str[1] == 0) nums[i] = 10;
        else if (parseInt(str[0])) nums[i] = parseInt(str[0]);
    
        for (let v of str) {
            if (v === "S") continue;
            if (v === "D") nums[i] = nums[i] ** 2;
            if (v === "T") nums[i] = nums[i] ** 3;
            if (v === "#") nums[i] *= -1;
            if (v === "*") {
                nums[i] *= 2;
                nums[i-1] *= 2;
            }
        }
    })
    return nums.reduce((sum, cur) => sum + cur, 0);
}