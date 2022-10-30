function solution(N, stages) {
  const fail = new Array(N).fill(0);

  const fraction = fail.map((_, idx) => {
    const countNotClear = stages.filter((v) => idx + 1 === v).length;
    const countClear = stages.filter((v) => idx + 1 <= v).length;
    return [idx + 1, countNotClear / countClear];
  });

  return fraction.sort((a, b) => b[1] - a[1]).map((v) => v[0]);
}