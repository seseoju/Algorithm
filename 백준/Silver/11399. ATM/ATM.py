N = int(input())
time = sorted(list(map(int, input().split())))
waiting_time = []
answer = 0
for i in time:
    answer += i
    waiting_time.append(answer)
print(sum(waiting_time))