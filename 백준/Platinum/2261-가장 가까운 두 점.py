# 2261

n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]
points.sort()

def calc_min_dist(start, end):
    min_dist = float('inf')

    for i in range(start, end - 1):
        for j in range(i + 1, end):
            dist = (points[i][0] - points[j][0]) ** 2 + \
                (points[i][1] - points[j][1]) ** 2

            min_dist = min(min_dist, dist)

    return min_dist

def get_min_dist(start, end):
    size = end - start
    if size < 3:
        return calc_min_dist(start, end)

    mid = (start + end) // 2
    # 1. 중간점 기준 왼쪽/오른쪽 영역내 두점 사이 최소거리 계산
    min_dist = min(get_min_dist(start, mid), get_min_dist(mid, end))

    # 2. 왼쪽 영역 좌표, 오른쪽 영역 좌표 사이 최소거리 있는지 확인
    # 중간점 기준 현재 최소 거리내에 있는 점들만 추가 비교
    x = points[mid][0]
    check_points = []

    for i in range(start, end):
        if (points[i][0] - x) ** 2 < min_dist:
            check_points.append(points[i])
    check_points.sort(key=lambda x: x[1])

    for i in range(len(check_points)):
        for j in range(i + 1, len(check_points)):
            if (check_points[i][1] - check_points[j][1]) ** 2 >= min_dist:
                break
            dist = (check_points[i][0] - check_points[j][0]) ** 2 + \
                (check_points[i][1] - check_points[j][1]) ** 2
            min_dist = min(min_dist, dist)

    return min_dist

print(get_min_dist(0, n))
