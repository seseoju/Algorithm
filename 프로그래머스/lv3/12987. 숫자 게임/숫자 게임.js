function solution(A, B) {    
    let result = 0;
    const newA = A.sort((a, b) => b - a);
    const newB = B.sort((a, b) => a - b);

    for (const numA of A) {
        const numB = B[B.length - 1];
        
        if (numA < numB) {
            result++;
            B.pop();
        }
    }
    
    return result;
}