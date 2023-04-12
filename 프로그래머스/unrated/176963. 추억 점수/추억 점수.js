function solution(name, yearning, photo) {
    const score = {};
    for (let i = 0; i < name.length; i++) {
        score[name[i]] = yearning[i];
    }
    return photo.map(list => list.map(name => score[name] || 0).reduce((acc, cur) => acc + cur, 0));
}