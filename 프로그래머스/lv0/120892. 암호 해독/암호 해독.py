def solution(cipher, code):
    # answer = ''
    # n = len(cipher)
    # for i in range(code, n + 1):
    #     if i % code == 0:
    #         answer += cipher[i - 1]
    # return answer
    return cipher[code-1::code]