
// =============== Data - 1 ===============

// let dolphinsScore1 = 44,
//     dolphinsScore2 = 23,
//     dolphinsScore3 = 71

// let koalasScore1 = 65,
//     koalasScore2 = 54,
//     koalasScore3 = 49

// =============== Data - 2 ===============

// let dolphinsScore1 = 85,
//     dolphinsScore2 = 54,
//     dolphinsScore3 = 41

// let koalasScore1 = 23,
//     koalasScore2 = 34,
//     koalasScore3 = 27


const calcAverage = (score1, score2, score3) => {

    let result = (score1 + score2 + score3) / 3

    return(result)

}
let dolphinsScore = calcAverage(dolphinsScore1, dolphinsScore2, dolphinsScore3),
    koalasScore = calcAverage(koalasScore1, koalasScore2, koalasScore3)

// console.log(dolphinsScore)
// console.log(koalasScore);

const checkWinner = () => {

    if (koalasScore * 2 < dolphinsScore) {
        console.log(`Dolphins Win!`);
    }
    else if (dolphinsScore * 2 < koalasScore) {
        console.log(`Koalas Win!`);
    }
    else{
        console.log("No team wins...");
    }
    
}
checkWinner()