def solution(s):
    reversed_s = ''.join(reversed(s))
    result = [(reversed_s[i+1:].find(c) + 1) if reversed_s[i+1:].find(c) != -1 else -1 for i, c in enumerate(reversed_s)]
    return list(reversed(result))

      