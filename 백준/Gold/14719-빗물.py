# 1. 시간복잡도: O(n^2), 공간복잡도: O(n)
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

# 2. 시간복잡도: O(n), 공간복잡도: O(1)
h, w = list(map(int, input().split()))
arr = list(map(int, input().split()))

left = 1
right = w - 2

left_max = arr[left - 1] 
right_max = arr[right + 1]

total = 0
while left <= right:
  if left_max < right_max:
    total += max(0, left_max - arr[left])
    left_max = max(left_max, arr[left])
    left += 1
  else:
    total += max(0, right_max - arr[right])
    right_max = max(right_max, arr[right])
    right -= 1

print(total)
