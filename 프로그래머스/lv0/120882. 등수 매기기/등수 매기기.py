def solution(score):
    l = [sum(i)/len(i) for i in score]
    answer = []
    sorted_l = sorted(l, reverse = True)
    for i in l:
        answer.append(sorted_l.index(i) + 1)
    return answer
    