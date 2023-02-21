function solution(book_time) {
    if (book_time.length === 1) return 1;

    const bookData = manipulateData(book_time).sort((a, b) => a[0] - b[0]);
    const room = [];

    for (let i = 0; i < bookData.length; i++) {
        const [start, end] = bookData[i];
        const checkIn = room.filter((endTime) => endTime <= start);
    
        if (!checkIn.length) {
            room.push(end);
        } else {
            room[room.indexOf(checkIn[0])] = end;
        }
    }
    
    return room.length;
}

function manipulateData(data) {
    const array = [];
    
    for (const [start, end] of data) {
        const newStart = Number(start.split(":").join(""));
        let newEnd = Number(end.split(":").join(""));
        
        newEnd += newEnd % 100 >= 50 ? 50 : 10;
        array.push([newStart, newEnd]);
    }
    
    return array;
}