function canBeWinner(ticketNumber) {
    // DO NOT EDIT
    // Use this to find the nth ticket that fulfills the winning criteria.
    if (ticketNumber === 0) return false;
    if (ticketNumber < 200) return false;
    if (ticketNumber < 1000) return ticketNumber % 13 === 0;
    let x = ticketNumber % Math.pow(10, Math.floor(Math.log10(ticketNumber)));
    let y = Math.floor(ticketNumber / 10);
    const result = canBeWinner(x) || canBeWinner(y) || ticketNumber % 17 === 0;
    return result;
}

function findWinner(firstTicketNumber, lastTicketNumber, n) {
    anarr = []
    trufy = []
    onlyyes =[]
    for(let i = 0; i< (lastTicketNumber-firstTicketNumber);i++){
        trufy.push(canBeWinner(firstTicketNumber+i))
        if(canBeWinner(firstTicketNumber+i)==true){
            anarr.push(firstTicketNumber+i)
            onlyyes.push(canBeWinner(firstTicketNumber+i))
        }
        if(anarr.length>(n+1)){
            break
        }
    }
    console.log(anarr,trufy,onlyyes)
    if((trufy.includes(true)==false)){
        return -1
    }
    else if(onlyyes.length<n){
        return -1
    }
    else{
        return anarr[n-1]
        }
}



// Your own test cases
// e.g.;

console.log(findWinner(434360, 434372, 4 )); // 4

module.exports = findWinner;
