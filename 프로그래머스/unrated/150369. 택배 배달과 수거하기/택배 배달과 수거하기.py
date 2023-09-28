def solution(cap, n, deliveries, pickups):
    answer = 0
    
    delivery_count = 0
    pickup_count = 0
    
    for i in range(n):
        delivery_count += deliveries[n-1-i]
        pickup_count += pickups[n-1-i]
        
        while delivery_count > 0 or pickup_count > 0:
            # 배달이나 수거가 가능함.
            answer += (n - i) * 2
            delivery_count -= cap
            pickup_count -= cap
            
    return answer