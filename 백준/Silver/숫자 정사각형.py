import sys

n, m= list(map(int, sys.stdin.readline().split(' ')))
arr = [list(map(int, sys.stdin.readline().strip())) for i in range(n)]

max_size = 1

for i in range(n):
    for j in range(m):
        # 정사각형 한변의 최대 길이
        x = min(n - i, m - j)

        # 가장 정사각형 크기가 큰 경우부터 찾는다
        for k in range(x - 1, 0, -1):
            if arr[i][j] == arr[i][j + k] and arr[i][j] == arr[i + k][j + k] and arr[i][j] == arr[i + k][j]:
                max_size = max(max_size, (k + 1) * (k + 1))
                break

print(max_size)
