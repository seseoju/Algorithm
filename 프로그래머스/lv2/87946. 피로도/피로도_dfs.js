function solution(k, dungeons) {
  const N = dungeons.length;
  const visited = new Array(N).fill(0); // 각 던전 탐험했는지 여부
  let answer = 0;
  
  function dfs(k, count) {
    answer = Math.max(answer, count);
    
    for (let i = 0; i < N; i++) {
      const [min, use] = dungeons[i];
      if (k >= min && !visited[i]) {
        visited[i] = 1;
        dfs(k - use, count + 1);
        visited[i] = 0;
      }
    }
  }
      
  dfs(k, 0);
  return answer;
}
