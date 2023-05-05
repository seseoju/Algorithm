def solution(keyinput, board):
    answer = [0, 0]
    border_c = [-((board[0] - 1) // 2), ((board[0] - 1) // 2)]
    border_r = [((board[1] - 1) // 2), -((board[1] - 1) // 2)]
    for key in keyinput:
        if key == 'left' and answer[0] - 1 >= border_c[0]:
            answer[0] -= 1
        elif key == 'right' and answer[0] + 1 <= border_c[1]:
            answer[0] += 1
        elif key == 'up' and answer[1] + 1 <= border_r[0]:
            answer[1] += 1
        elif key == 'down' and answer[1] - 1 >= border_r[1]:
            answer[1] -= 1
    return answer