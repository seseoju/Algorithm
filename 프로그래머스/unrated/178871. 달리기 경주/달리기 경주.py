def solution(players, callings):
    playersDict = dict()
    
    for i, player in enumerate(players):
        playersDict[player] = i
    
    for calling in callings:
        index = playersDict[calling]
        front = players[index - 1]
        playersDict[calling] = index - 1
        playersDict[front] = index
        
        players[index] = front
        players[index - 1] = calling

    return players