function solution(angle) {
    if (angle === 180) {
        return 4;
    } else if (angle > 90) {
        return 3;
    } else if (angle === 90) {
        return 2;
    } else if (angle > 0) {
        return 1;
    } else {
        return "해당하는 값이 없습니다."
    }
}