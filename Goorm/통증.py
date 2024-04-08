n = int(input())

count = 0
# 통증 수치 감소치가 가장 큰 아이템부터 사용할 수 있는지 확인
while n != 0:
	if n // 14 > 0:
		count += n // 14
		n %= 14

	elif n // 7 > 0:
		count += n // 7
		n %= 7
	
	elif n // 1 > 0:
		count += n // 1
		n %= 1

print(count)
