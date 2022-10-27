function solution(my_string) {
    // return my_string.replace(/[^0-9]/g, "").split("").map(v => +v).sort((a, b) => a - b);
    return my_string.match(/[0-9]/g).map(v => +v).sort((a, b) => a - b);
}