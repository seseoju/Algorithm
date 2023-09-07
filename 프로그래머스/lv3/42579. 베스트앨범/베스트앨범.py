def solution(genres, plays):
    total={} 
    genres_sort={} 
    answer = []

    for i in range(len(genres)):
        gen = genres[i]
        if gen not in total:
            total[gen]= plays[i]
            genres_sort[gen] = [(plays[i],i)]
        else:
            total[gen] +=plays[i]
            genres_sort[gen].append((plays[i],i))
    # genres_rank = sorted(total,key = lambda x:x[1], reverse= True)
    genres_rank = list(map(lambda x: x[0], sorted(total.items(),key = lambda x:x[1], reverse= True)))

    print(genres_rank)
    for gen in genres_rank:
        genres_sort[gen].sort(key = lambda x: (x[0],-x[1]), reverse=True)

    print(genres_sort)
    for gen in genres_rank:
        answer.append(genres_sort[gen][0][1])
        if len(genres_sort[gen]) > 1: #해당 조건 바뀜.
            answer.append(genres_sort[gen][1][1])

    return answer