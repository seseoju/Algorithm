'''
지난번에 풀었던 LCS 문제와 비슷한데 제한조건이 까다로운 문제 (https://github.com/seseoju/Algorithm/blob/main/%EB%B0%B1%EC%A4%80/Gold/9251-LCS.py)

다른점은 연속한 부분 문자열이어야함
따라서 아예 같지 않은 한 dp 값을 0으로 유지

2차원 dp는 메모리 초과로 dp를 행 한줄씩 관리
직전 행만 비교하면 되기 때문에 직전 행을 덮어쓰는 방식으로 처리
'''

import sys
input = sys.stdin.readline
a = ' ' + input().rstrip()
b = ' ' + input().rstrip()
len_a = len(a)
len_b = len(b)

dp = [0] * len_b
answer = 0

for i in range(1, len_a):
  temp = [0] * len_b
  for j in range(1, len_b):
    if a[i] == b[j]:
      temp[j] = dp[j - 1] + 1
      answer = max(answer, temp[j])
  dp = temp[:]

print(answer)
