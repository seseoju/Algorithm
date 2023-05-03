def solution(array, n):
    sorted_array = sorted(array, key = lambda x: (abs(x - n), x))
    return sorted_array[0]