import math

def solution(fees, records):
    [default, default_fee, per, per_fee] = fees
    total = {}
    current = {}
    end = 1439
    
    for record in records:
        time, car, state = tuple(record.split())
        h, m = tuple(map(int, time.split(':')))
        minutes = h * 60 + m
        
        if state == 'IN':
            if car not in total:
                total[car] = 0
            current[car] = minutes
        else:
            total[car] += minutes - current[car]
            current[car] = -1

    for key in current:
        if current[key] != -1:
            total[key] += end - current[key]
        
        if total[key] <= default:
            total[key] = default_fee
        else:
            total[key] = default_fee + math.ceil((total[key] - default) / per) * per_fee

    answer = [value for key, value in sorted(total.items(), key = lambda x: int(x[0]))]
    return answer