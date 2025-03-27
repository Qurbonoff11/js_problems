'use-stric';

const getWeight = (weight) => {

    switch (weight) {
        case "gram":
            return 1 / 1000;
            break;
        case "milligram":
            return 1 / 1000000;
            break;
        case "funt":
            return 2.20462;
            break;
        case "tonna":
            return 1000;
            break;
        case "unsiy":
            return 0.0283495;
            break;
        default:
            break;
    }
}

const convertWeight = (unit, weight) => {
    return console.log(`${(weight * unit).toFixed(2)} kg`);
}

convertWeight(getWeight("unsiy"), 50);