def solution(k, m, score):
    sorted_score = sorted(score, reverse=True)
    
    answer = 0
    end = len(sorted_score) // m * m

    for s in range(0, end, m):
        answer += min(sorted_score[s:s+m]) * m

    return answer;