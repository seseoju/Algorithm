def solution(n, m):
    answer = []
    # 유클리드 호제법으로 최대공약수 구하기
    x, y = n, m
    while(y):
        x, y = y, x % y
    answer.append(x)
    
    # 최소공배수 구하기
    answer.append((n * m) // x)
    return answer