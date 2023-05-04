def solution(n):
    d = 2
    result = []
    while d <= n:
        if n % d == 0:
            result.append(d)
            n = n / d
        else:
            d += 1
    return list(dict.fromkeys(result))