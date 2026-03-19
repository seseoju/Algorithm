import sys
input = sys.stdin.readline

n, m = list(map(int, input().split()))
nums = sorted(list(set(map(int, input().split()))))

result = []

def backtracking(start, depth):
  if depth == m:
    print(*result)
    return 

  for i in range(start, len(nums)):
    result.append(nums[i])
    backtracking(i, depth + 1) # 자기 자신도 다음 수열에 포함 가능
    result.pop()

backtracking(0, 0)
