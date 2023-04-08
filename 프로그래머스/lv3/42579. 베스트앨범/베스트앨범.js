function solution(genres, plays) {
    let answer = [];
    
    // 각 장르에 속한 노래들의 총 재생 횟수를 구한다.
    const total = {};
    for (let i = 0; i < genres.length; i++) {
        total[genres[i]] = (total[genres[i]] || 0) + plays[i];
    }
    
    // 총 재생 횟수가 가장 많은 장르부터 정렬한다.
    const sortedGenres = Object.keys(total).sort((a, b) => total[b] - total[a]);
    
    // 각 장르 내에서 많이 재생된 순으로 정렬해 2개의 곡만 남긴다.
    const playCount = {};
    for (let i = 0; i < genres.length; i++) {
        playCount[genres[i]] = (playCount[genres[i]] || []).concat(i);
    }
    
    for (let genre in playCount) {
        playCount[genre].sort((a, b) => plays[b] - plays[a]);
        playCount[genre] = playCount[genre].slice(0, 2);
    }
    
    // 총 재생 횟수가 가장 높은 장르부터 곡들을 나열한다.
    for (const genre of sortedGenres) {
        answer = [...answer, ...playCount[genre]];
    }
    
    
    return answer;
}