def solution(s):
    answer = 0
    dict = {'A': 0}
    first = ''

    for c in s:
        if first == '':
            first += c
            dict[first] = 1
            continue
            
        if c == first:
            dict[first] += 1
        else:
            dict['A'] += 1
            
        if dict[first] == dict['A']:
            print(dict)
            answer += 1
            first = ''
            dict = {'A': 0}
    return answer + 1 if dict != {'A': 0} else answer

