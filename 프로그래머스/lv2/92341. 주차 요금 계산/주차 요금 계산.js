function solution(fees, records) {
  const infos = new Map();
  const totalTime = {};
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;

  for (const record of records) {
    const [time, num, state] = record.split(" ");
    const [h, m] = time.split(":");
    const minute = Number(h) * 60 + Number(m);

    if (state === "IN") {
      infos.set(num, minute);
      continue;
    }

    const duration = minute - infos.get(num);
    totalTime[num] = totalTime[num] ? totalTime[num] + duration : duration;
    infos.delete(num);
  }

  // 출차 못한 차들 계산하기
  const last = 1439;
  for (const num of infos.keys()) {
    const duration = last - infos.get(num);
    totalTime[num] = totalTime[num] ? totalTime[num] + duration : duration;
  }

  // 정렬하기
  const sortedByCar = Object.keys(totalTime).sort((a, b) => Number(a) - Number(b));

  // 정답 출력
  const answer = [];
  for (const car of sortedByCar) {
    const totalFee = totalTime[car] > defaultTime ? 
          defaultFee + Math.ceil((totalTime[car] - defaultTime) / unitTime) * unitFee : defaultFee;
    answer.push(totalFee);
  }
  return answer;
}
