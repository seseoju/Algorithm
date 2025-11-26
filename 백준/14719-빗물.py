h, w = list(map(int, input().split()))
arr = list(map(int, input().split()))

total = 0
# 0, w-1 물 고일 수 없음
for i in range(1, w - 1):
  left = max(arr[:i])
  right = max(arr[i+1:])

  max_h = min(left, right)
  if max_h > arr[i]:
    total += max_h - arr[i]

print(total)
