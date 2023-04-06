function solution(word) {
    const vowel = ["A", "E", "I", "O", "U"];
    
    function getWords(prev, n, result){
        if (n === 5) return result;

        const arr = [];

        for (let i = 0; i < prev.length; i++) {
            for (let j = 0; j < 5; j++) {
                arr.push(prev[i] + vowel[j]);
            }
        }
        
        result = [...result, ...arr];
        prev = arr;

        return getWords(prev, n + 1, result);
    }
    
    const words = getWords(vowel, 1, [...vowel]);
    words.sort();
    
    return words.indexOf(word) + 1;
}
