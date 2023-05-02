def solution(num, k):
    # idx = str(num).find(str(k))
    # return idx + 1 if idx != -1 else idx
    
    return -1 if str(k) not in str(num) else str(num).find(str(k)) + 1