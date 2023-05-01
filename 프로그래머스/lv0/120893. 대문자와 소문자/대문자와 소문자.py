def solution(my_string):
    answer = ''
    for s in my_string:
        answer += s.lower() if s.isupper() else s.upper()
    return answer