def solution(arr):
    arr.pop(arr.index(min(arr)))
    return [-1] if not len(arr) else arr