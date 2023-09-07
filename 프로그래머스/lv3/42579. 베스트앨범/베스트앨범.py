def solution(genres, plays):
    answer = []
    dict = {}
    count_dict={}

    for i, genre in enumerate(genres):
        if genre not in dict:
            dict[genre] = list()
            count_dict[genre] = 0

        dict[genre].append((plays[i], i))
        count_dict[genre] += plays[i]

    sorted_genre = sorted(count_dict.items(), key = lambda x:x[1], reverse = True)
 
    for genre, _ in sorted_genre:
        dict[genre].sort(key = lambda x: (-x[0], x[1]))
        answer.append(dict[genre][0][1])
        if (len(dict[genre]) > 1):
            answer.append(dict[genre][1][1])

    return answer
