function solution(genres, plays) {
    let answer = [];
    
    const total = {};
    for (let i = 0; i < genres.length; i++) {
        total[genres[i]] = (total[genres[i]] || 0) + plays[i];
    }
    
    const sortedGenres = Object.keys(total).sort((a, b) => total[b] - total[a]);
    
    const playCount = {};
    for (let i = 0; i < genres.length; i++) {
        playCount[genres[i]] = (playCount[genres[i]] || []).concat(i);
    }
    
    for (let genre in playCount) {
        playCount[genre].sort((a, b) => plays[b] - plays[a]);
        playCount[genre] = playCount[genre].slice(0, 2);
    }
    
    for (const genre of sortedGenres) {
        answer = [...answer, ...playCount[genre]];
    }
    
    
    return answer;
}