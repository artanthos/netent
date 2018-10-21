function getAnswer(req, res) {
    let sequence = getSequence();
    
    res.setHeader('Content-Type', 'application/json');
    res.json({
        "bonus": Math.random() >= 0.6,
        "sequence": sequence,
        "win": getWinType(sequence)
    });
}

function getSequence(){
    return [
        getRand(0,5),
        getRand(0,5),
        getRand(0,5)
    ]
}

function getWinType(array){

    // make a map with all the occurences for each item
    let occurences = array.reduce((a, b) => a.set(b, a.get(b) + 1 || 1), new Map);

    let winType = [];

    // make another array with just the numerical representation of the occurences
    for (var [key, value] of occurences) {
        winType.push(value);
    }
    
    // the max number of these Map values is our win type
    return Math.max(...winType);
    
}

function getRand(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

export default getAnswer;