dolphinsScore1 = 44
dolphinsScore2 = 23
dolphinsScore3 = 71

koalasScore1 = 65
koalasScore2 = 54
koalasScore3 = 49

def calcAverage(score1, score2, score3):

    result = (score1 + score2 + score3) / 3

    return(result)

koalasScore = calcAverage(koalasScore1, koalasScore2, koalasScore3)
dolphinsScore = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3)

def checkWinner():

    if koalasScore * 2 < dolphinsScore:
        print(f"Dolphins Win!")
    elif dolphinsScore * 2 < koalasScore:
        print(f"Koalas Win!")
    else:
        print(f"No team wins...")

checkWinner()