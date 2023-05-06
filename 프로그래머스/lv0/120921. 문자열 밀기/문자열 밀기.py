def solution(A, B):
#     answer = -1
#     t = list(A)
    
#     for i in range(len(A)):
#         if ''.join(t) == B:
#             answer = i
#             break
#         t.insert(0, t.pop())
        
#     return answer
    return (B * 2).find(A)

