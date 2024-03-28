# -*- coding: utf-8 -*-
# UTF-8 encoding when using korean
from collections import defaultdict
n, k = list(map(int, input().split()))
nums = list(map(int, input().split()))

# 1. 10진수를 키로, 2진수 중 1의 개수를 값으로 갖는 딕셔너리 하나 생성
dict = defaultdict(int)

for num in nums:
	dict[num] = bin(num).count('1')

# 2. 1의 개수를 기준으로 내림차순, 1의 개수 같으면 원래 10진수를 기준 내림차순
nums.sort(key = lambda x : (-dict[x], -x))
print(nums[k - 1])
