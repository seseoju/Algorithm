# 시뮬레이션
# deque.rotate(1) -> 오른쪽 회전, deque.rotate(-1) -> 왼쪽 회전
from collections import deque

N, K = list(map(int, input().split()))
q = deque(list(map(int, input().split())))
robot = deque([0] * N)

cnt = 0 # 내구도가 0인 칸의 개수
step = 0

while cnt < K:
  # 벨트 회전
  q.rotate(1)
  robot.rotate(1)
  robot[-1] = 0

  # 로봇 이동
  for i in range(N - 2, -1, -1):
    if robot[i] == 1 and robot[i + 1] == 0 and q[i + 1] >= 1:
      robot[i + 1] = 1
      robot[i] = 0
      q[i + 1] -= 1
  robot[-1] = 0

  # 로봇 올리기 -> 내구도 감소
  if q[0] != 0 and robot[0] == 0:
    robot[0] = 1
    q[0] -= 1

  cnt = q.count(0)
  step += 1
 
print(step)
