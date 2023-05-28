n = int(input())
answer = 0

while n != 0:
  if n % 5 == 0:
    n -= 5
    answer += 1
  elif n % 3 == 0:
    n -= 3
    answer += 1
  elif n >= 5:
    n -= 5
    answer += 1
  elif n >= 3:
    n -= 3
    answer += 1
  else:
    answer = -1
    break
print(answer)
