# 브루트포스
# 시간 복잡도 :  O(N^2), 공간 복잡도 : O(N)

INF = int(1e9)

N = int(input())
nums = list(map(int, input().split()))
result = [0] * N

for i in range(N - 1):
  min_value = -INF
  for j in range(i + 1, N):
    slope = (nums[j] - nums[i]) / (j - i)
    
    if min_value < slope:
      result[i] += 1
      result[j] += 1
      min_value = slope

print(max(result))


