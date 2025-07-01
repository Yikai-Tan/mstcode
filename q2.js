function calculateAnimalsInPettingZoo(totalAnimals, totalFeet) {
    return( ((totalFeet/2)==totalAnimals)? totalAnimals:totalAnimals-((totalFeet/2)-totalAnimals) )
}


// Your own test cases
// e.g.;
console.log(calculateAnimalsInPettingZoo(100, 200))
console.log(calculateAnimalsInPettingZoo([20, 10, 30, 60], [100, 60, 120, 150], 50));

module.exports = calculateAnimalsInPettingZoo;
