function solution(new_id) {
  return new_id
    .toLowerCase() // 1단계
    .replace(/[^a-z0-9-_.]/g, "") // 2단계
    .replace(/\.+/g, ".") // 3단계
    .replace(/^\.|\.$/, "") // 4단계
    .replace(/^$/, "a") // 5단계
    .slice(0, 15) // 6단계
    .replace(/\.$/, "")
    .replace(/^(.)$/, "$1$1$1")
    .replace(/^(.)(.)$/, "$1$2$2");
}