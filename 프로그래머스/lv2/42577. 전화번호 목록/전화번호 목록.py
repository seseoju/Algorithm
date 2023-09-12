# 효율성 개선 -> 정렬x, 해시 사용
from collections import Counter

def solution(phone_book):
    dict = Counter(phone_book)
   
    for num in phone_book:
        prefix = ''
        for n in num:
            prefix += n
            if prefix in dict and prefix != num:
                return False
        
    return True
            
