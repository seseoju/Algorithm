# def solution(sides):
#     sides.sort()
#     lastIdx = len(sides) - 1
#     s = sum(sides[:lastIdx:])
#     return 1 if sides[lastIdx] < s else 2

def solution(sides):
    return 1 if max(sides) < (sum(sides) - max(sides)) else 2