function solution(genres, plays) {
  let dic = {}; // 장르별 총 재생 횟수 저장
  genres.forEach((t, i) => {
    dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
  });

  let dupDic = {};
  return genres
    .map((t, i) => ({genre: t, count: plays[i], index: i})) // 각 노래의 정보를 저장한 배열 생성
    .sort((a, b) => {
      if (a.genre !== b.genre) return dic[b.genre] - dic[a.genre]; // 장르가 다르면 장르의 총 재생 횟수를 기준으로 정렬
      if (a.count !== b.count) return b.count - a.count; // 장르가 같고, 재생 횟수가 다르면 재생 횟수 기준으로 정렬
      return a.index - b.index; // 장르도 같고, 재생 횟수도 같으면 고유 번호 낮은 기준으로 정렬
    })
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1; // 각 장르에서 노래 2개만 선택
      return true;
    })
    .map((t) => t.index);
}