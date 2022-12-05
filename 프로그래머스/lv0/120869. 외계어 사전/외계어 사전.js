function solution(spell, dic) {
    const spellSet = spell.sort().join("");
    
    for (i of dic) {
        const set = [...new Set(i)].sort().join("");
        if (set === spellSet) return 1;
    }
    
    return 2;
}