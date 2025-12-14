'''
유형 : DP
'''

# 1번: 이전까지 가장 긴 부분 수열에 현재 숫자를 합하기
n = int(input())
nums = list(map(int, input().split()))

dp = [[num] for num in nums]


for i in range(1, n):
  for j in range(i):
    if nums[j] < nums[i]:
      new_nums = dp[j] + [nums[i]]

      if len(new_nums) > len(dp[i]):
        dp[i] = new_nums

result = max(dp, key=len)
print(len(result))
print(*result)

# 2번 : 각 숫자를 마지막 요소로 넣었을 때 가장 긴 부분 수열의 길이 계산 -> 해당 수열 역순 탐색
n = int(input())
nums = list(map(int, input().split()))

dp = [1] * n

for i in range(n):
  for j in range(i):
    if nums[j] < nums[i]:
      dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))

max_dp = max(dp)
arr = []
for i in range(n - 1, -1, -1):
  if dp[i] == max_dp:
    arr.append(nums[i])
    max_dp -= 1
arr.reverse()

print(*arr)
