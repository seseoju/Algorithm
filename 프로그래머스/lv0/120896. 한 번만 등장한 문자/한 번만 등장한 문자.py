def solution(s):
    answer = ''
    for i in s:
        cnt = s.count(i)
        if cnt == 1:
            answer += i
    return ''.join(sorted(answer))
        