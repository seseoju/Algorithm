function solution(today, terms, privacies) {
  const now = new Date(today);
  now.setHours(now.getHours() + 9);
  const result = [];

  const types = {};
  terms.forEach((term) => {
    const [type, month] = term.split(" ");
    types[type] = Number(month);
  });

  privacies.forEach((privacy, i) => {
    const [_date, type] = privacy.split(" ");

    const date = new Date(_date);
    date.setMonth(date.getMonth() + types[type]);

    if (now > date) result.push(i + 1);
  });

  return result;
}

// 문제에 모든 달은 28일까지 있다고 가정되어 있으므로 다시 풀음.
// Date 내장 객체 사용 x
function solution(today, terms, privacies) {
  const [year, month, date] = today.split(".").map(Number);
  const totalDate = year * 12 * 28 + month * 28 + date;
  const result = [];

  const types = {};
  terms.forEach((term) => {
    const [type, month] = term.split(" ");
    types[type] = Number(month);
  });

  privacies.forEach((privacy, i) => {
    const [_date, type] = privacy.split(" ");

    const [year, month, date] = _date.split(".").map(Number);
    const validDate = year * 12 * 28 + month * 28 + date + types[type] * 28;

    if (totalDate >= validDate) result.push(i + 1);
  });

  return result;
}
