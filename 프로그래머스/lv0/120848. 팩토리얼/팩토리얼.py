def solution(n):
    answer, num = 1, 1
    while (answer <= n):
        num += 1
        answer *= num
    return num - 1