n, k = list(map(int, input().split()))
characters = [int(input()) for _ in range(n)]

low = min(characters)
high = max(characters) + k
answer = 0

while low <= high:
    mid = (low + high) // 2

    total = sum(max(0, mid - x) for x in characters)

    if total <= k:
        answer = mid
        low = mid + 1
    else:
        high = mid - 1

print(answer)
