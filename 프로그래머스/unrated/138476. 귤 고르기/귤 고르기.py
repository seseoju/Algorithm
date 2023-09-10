from collections import Counter

def solution(k, tangerine):
    answer = 0
    dict = Counter(tangerine)
    count = 0
  
    sorted_dict = list(map(lambda x:x[1], sorted(dict.items(), key = lambda x: -x[1])))
    
    for c in sorted_dict:
        count += c
        answer += 1
        
        if count >= k: break
            
    return answer