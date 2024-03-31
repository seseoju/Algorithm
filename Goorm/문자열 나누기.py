from itertools import product

n = int(input())
s = input()

# 1. 3개의 부분 문자열로 나눌때 나올 수 있는 각 문자열의 자릿수에 대한 모든 경우의 수를 만든다.
num = [i for i in range(1, n - 1)]
combinations = list(product(num, repeat=3))

# 2. 자릿수의 합이 n인 경우에만 부분 문자열을 구한다. 그리고, 각 부분 문자열을 집합에 추가한다. 집합을 정렬한다.
strs = []
str_set = set()

for i, j, k in combinations:
	if i + j + k == n :
		first = s[:i]
		second = s[i:i+j]
		third = s[i+j:]
		strs.append((first, second, third))
		str_set.add(first)
		str_set.add(second)
		str_set.add(third)
		
str_list = sorted(list(str_set))

# 4. 각 방법마다 점수를 계산한다. 최대 점수를 출력한다.
result = [str_list.index(x[0]) + str_list.index(x[1]) + str_list.index(x[2]) + 3 for x in strs]
print(max(result))
