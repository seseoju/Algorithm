def solution(t, p):
    answer = 0
    cnt, num_p = len(p), int(p)
    for i in range(len(t) - cnt + 1):
        if (int(t[i:i+cnt]) <= num_p):
            answer += 1
    return answer