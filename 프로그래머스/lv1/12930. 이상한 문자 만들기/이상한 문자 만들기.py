def solution(s):
    part_idx = 0
    answer = ''
    for c in s:
        if c == ' ':
            part_idx = 0
            answer += ' '
            continue
        
        answer += c.upper() if part_idx % 2 == 0 else c.lower()
        part_idx += 1
    return answer