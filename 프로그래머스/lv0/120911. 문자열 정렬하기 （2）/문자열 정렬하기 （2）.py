def solution(my_string):
    answer = [x.lower() if x.isupper() else x for x in my_string]
    return ''.join(sorted(answer))