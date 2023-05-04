def solution(s):
    stack = []
    for i in s.split():
        try: 
            # 실행할 코드
            stack.append(int(i))
        except:
            # 예외가 발생했을 때 처리하는 코드
            stack.pop()
    return sum(stack)