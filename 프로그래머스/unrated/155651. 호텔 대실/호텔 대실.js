// function solution(book_time) {
//     if (book_time.length === 1) return 1;

//     // 데이터를 숫자 타입으로 변경하고, 오름차순 정렬
//     const bookData = manipulateData(book_time).sort((a, b) => a[0] - b[0]);
//     const room = [];

//     for (let i = 0; i < bookData.length; i++) {
//         const [start, end] = bookData[i];
//         // 청소완료시간 이후에 들어오는 손님을 찾는다.
//         const checkIn = room.filter((endTime) => endTime <= start);
    
//         if (!checkIn.length) {
//             room.push(end);
//         } else {
//             room[room.indexOf(checkIn[0])] = end;
//         }
//     }
    
//     return room.length;
// }

// // book_time을 숫자 타입으로 변형
// function manipulateData(data) {
//     const array = [];
    
//     for (const [start, end] of data) {
//         const newStart = Number(start.split(":").join(""));
//         let newEnd = Number(end.split(":").join(""));
//         // 50 ~ 59분은 50을 더해서 시간을 알맞게 변형
//         newEnd += newEnd % 100 >= 50 ? 50 : 10;
//         array.push([newStart, newEnd]);
//     }
    
//     return array;
// }

function solution(book_time) {
  // 하루를 분으로 쪼갠다.
  const timeArr = Array.from({length: makeMinStamp("23:59") + 10}, () => 0);

  book_time.forEach((time, i) => {
    const [s, e] = time;
    let start = makeMinStamp(s);
    const end = makeMinStamp(e) + 9;

    for (start; start <= end; start++) {
      timeArr[start]++;
    }
  });

  return Math.max(...timeArr);
}

// book_time을 숫자 타입으로 변형
function makeMinStamp(time) {
  const [hour, min] = time.split(":").map(Number);
  return hour * 60 + min;
}

