function createZooInfo(zooAddress, numberOfStaff, numberOfAnimals, numberOfEnclosures) {
    returnables = []
    averagecalc=numberOfAnimals/numberOfEnclosures
    if(numberOfStaff>1){
        returnables.push('members')
    }
    else{
        returnables.push('member')
    }
    if(numberOfAnimals>1){
        returnables.push('animals')
    }
    else{
        returnables.push('animal')
    }
    if(averagecalc>1){
        returnables.push('animals')
    }
    else returnables.push('animal')
    return `The zoo is located at ${zooAddress}.\nIt has ${numberOfStaff} staff ${returnables[0]}, houses ${numberOfAnimals} ${returnables[1]}, and\naverages ${averagecalc} ${returnables[2]} per enclosure.`
}

// Your own test cases
// e.g.;

console.log(createZooInfo('50 Wildlife Avenue', 75, 120, 6));

module.exports = createZooInfo;
