import sys

n, m = map(int, sys.stdin.readline().split(' '))
keywords = [sys.stdin.readline().strip() for i in range(n)]
posts = [sys.stdin.readline().strip().split(',') for i in range(m)]

s = set(keywords)

for post in posts:
    for keyword in post:
        s.discard(keyword) # discard는 제거하려는 keyword가 없어도 에러 발생 x
    print(len(s))
