import sys
from collections import defaultdict
input = sys.stdin.readline

n, k = map(int, input().split())
dict = defaultdict(int)

for _ in range(n):
	p, c = map(int, input().split())
	dict[c // p] += p

sorted_full = sorted(dict.keys(), key = lambda x: -x)

result = 0
for full in sorted_full:
	fruit = dict[full]
	
	if fruit <= k:
		result += full * fruit
		k -= fruit
	else:
		result += full * k
		break;
		
print(result)

# 모두 조각 내서 사다보면 어느새 한 과일의 모든 조각을 다 사버린 경우도 있을거다. 그럼 과일 1개 사는 거랑 동일해진다!
