n, c = list(map(int, input().split()))

arr = [int(input()) for _ in range(n)]
arr.sort()

start = 1  # 최소 거리
end = arr[-1] - arr[0]  # 최대 거리
answer = 1

while start <= end:
    mid = (start + end) // 2  # 최소거리 후보
    current = arr[0]
    count = 1  # 첫번째 집 공유기 설치

    for i in range(1, len(arr)):
        if arr[i] >= current + mid:
            count += 1
            current = arr[i]

    # 설치 가능한 공유기 수가 목표 이상이면 거리 늘려보기
    if count >= c:
        start = mid + 1
        answer = mid
    else:
        end = mid - 1

print(answer)
