def solution(n):
    d = 2
    result = []
    while d <= n:
        if n % d == 0:
            n /= d
            if d not in result:
                result.append(d)
        else:
            d += 1
    return result