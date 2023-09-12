def solution(phone_book):
    phone_book.sort() # 문자열 정렬
    
    for i, num1 in enumerate(phone_book[:-1]):
        if phone_book[i+1].startswith(num1): return False
    
    return True