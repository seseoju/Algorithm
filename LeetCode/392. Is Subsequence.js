/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = (s, t) => {
    let result = 0;
    let idxS = 0;

    for (const char of t) {
        if (char === s[idxS]) {
            result++;
            idxS++;
        }
    }

    return result === s.length;
}

console.log("abc", "ahbgdc"); // true
console.log("axc", "ahbgdc"); // false
