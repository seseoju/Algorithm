def solution(users, emoticons):
    answer = [0, 0]
    discount_rate = [10, 20, 30, 40]
    discounts = []
    
    # 할인율 경우의 수 모두 구하기
    def dfs(temp, depth):
        if depth == len(temp):
            discounts.append(temp[:])
            return
        for d in discount_rate:
            temp[depth] += d
            dfs(temp, depth + 1)
            temp[depth] -= d
            
    dfs([0] * len(emoticons), 0)
    
    for discount in discounts:
        subscriber = 0
        revenue = 0
        
        for user in users:
            cost = 0 # 현재 사용자의 이모티콘 구매 비용
            for i in range(len(discount)):
                if user[0] <= discount[i]:
                    cost += emoticons[i] * (100 - discount[i]) / 100
                if cost >= user[1]: # 이모티콘 구매 비용이 기준을 초과하면
                    cost = 0        # 이모티콘 구매 취소
                    subscriber += 1 # 이모티콘 플러스 서비스 가입
                    break
            revenue += cost
        
        if subscriber >= answer[0]:
            if subscriber == answer[0]:
                answer[1] = max(revenue, answer[1])
            else:
                answer[1] = revenue
            answer[0] = subscriber
            
    return answer