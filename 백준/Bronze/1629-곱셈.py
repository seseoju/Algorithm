# 1629 곱셈

a, b, c = list(map(int, input().split()))

def recursive_fn(a, b):
    if b == 1:
        return a % c

    # b ∈ Z
    half = recursive_fn(a, b // 2)
    result = (half * half) % c
  
    if b % 2 == 1: 
        result = (result * a) % c

    return result

print(recursive_fn(a, b))
