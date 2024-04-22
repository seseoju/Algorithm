import sys

input = sys.stdin.readline

n = int(input())
a, b = list(map(int, input().split()))

last = n // b * b
cnt = n // b
rest = n % b

if rest % a == 0:
	cnt += rest // a
	print(cnt)
	
else:
	while True:
		if last == 0:
			cnt = -1
			break
		
		last -= b
		cnt = last // b
		rest = n - last
		
		if rest % a == 0:
			cnt += rest // a
			break
		
	print(cnt)
