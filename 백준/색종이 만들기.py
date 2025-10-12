# 2630

n = int(input())

paper = [list(map(int, input().split())) for _ in range(n)]

answer = [0, 0]  # 하얀색, 파랑색

def fn(r, c, n):
    color = paper[r][c]

    for i in range(r, r + n):
        for j in range(c, c + n):
            if color != paper[i][j]:
                m = n // 2

                fn(r, c, m)  # 2사분면
                fn(r, c + m, m)  # 1사분면
                fn(r + m, c, m)  # 3사분면
                fn(r + m, c + m, m)  # 4사분면
                return

    if color == 0:
        answer[0] += 1
    else:
        answer[1] += 1

fn(0, 0, n)
print(*answer, sep='\n')
