n = int(input())
time = {1: 0, 2: 0}
total = {1: 0, 2: 0} # 누적 시간
score = {1: 0, 2: 0}
state = 0 # 0: 비김, 1: 1팀 리드, 2: 2팀 리드

for i in range(n):
    team, score_time = input().split()
    m, s = map(int, score_time.split(":"))
    time_to_second = m * 60 + s
    score[int(team)] += 1

    if state == 0:
        time[int(team)] = time_to_second
        state = int(team)
    elif state !=0 and score[1] == score[2]: # 리드 -> 동점될 때, 리드하던 팀 시간 누적
        total[state] += time_to_second - time[state]
        state = 0

if state != 0:
    total[state] += 60 * 48 - time[state]

print('{:0>2}:{:0>2}'.format(total[1]//60, total[1] % 60))
print('{:0>2}:{:0>2}'.format(total[2]//60, total[2] % 60))