// 구조가 같은 문자열인지 확인하는 문제
// egg, add -> 같은 구조
// foo, bar -> 다른 구조

// 이를 비교하기 위해서는 두개의 Map 객체를 생성하고, s와 t 기준 서로 매핑되는 문자열을 set한다.
// 각 문자가 mapS[s[i]] = t[i], mapT[t[i]] = s[i]를 만족해야 한다.
// 하나라도 만족하지 않으면 false


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        mapS.set(s[i], mapS.get(s[i]) || t[i]);
        mapT.set(t[i], mapT.get(t[i]) || s[i]);
        if (mapS.get(s[i]) !== t[i] || mapT.get(t[i]) !== s[i]) return false;
    }
    return true;

};

console.log("egg", "add"); // true
console.log("foo", "bar"); // false
console.log("paper", "title"); // true
