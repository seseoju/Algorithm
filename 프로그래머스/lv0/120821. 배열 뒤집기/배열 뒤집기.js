function solution(num_list) {
    let arr = [];
    for (const num of num_list) {
        arr = [num, ... arr];
    }
    return arr;
}