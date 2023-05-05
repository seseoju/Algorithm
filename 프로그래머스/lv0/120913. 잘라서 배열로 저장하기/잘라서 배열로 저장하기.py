def solution(my_str, n):
    result = []
    end = len(my_str) // n
    for i in range(end):
        result.append(my_str[i*n:(i+1)*n])
    if (n * end < len(my_str)):
        result.append(my_str[n*end:])
    return result