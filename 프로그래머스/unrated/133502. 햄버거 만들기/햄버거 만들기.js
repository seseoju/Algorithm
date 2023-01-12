// function solution(ingredient) {
//     const rule = "1231";
//     let result = 0;
//     let order = ingredient.join("");
    
//     while (order.includes(rule)) {
//         order = order.replace(rule, "");
//         result++;
//     }
    
//     return result;
// }

function solution(ingredient) {
    let result = 0;
    const stack = [];
    
    for (item of ingredient) {
        stack.push(item);
        
        if (stack[stack.length - 1] === 1 
            && stack[stack.length - 2] === 3 
            && stack[stack.length - 3] === 2 
            && stack[stack.length - 4] === 1) 
        {
            stack.splice(-4);
            result++;
        }
    }
    
    return result;
}