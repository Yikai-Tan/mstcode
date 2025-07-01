function calculateRewards(trainingLog) {
    conter = 0
    rewarder = 0
    for(let i = 0 ; i<trainingLog.length;i++){
        if ((trainingLog[i]=="Nil")&&(trainingLog[i+1]=="Nil")&&(trainingLog[i+2]=="Nil")&&(trainingLog[i+3]=="Nil")&&(trainingLog[i+4]=="Nil")){
            return 0
            break
        }
        else if ((trainingLog[i]=="Reward")&&(trainingLog[i+1]=="Reward")&&(trainingLog[i+2]=="Reward")){
            rewarder+= 1
            conter +=1

        }
        else if(trainingLog[i]=="Reward"){
            conter +=1
        }
    }

    return conter + (rewarder*5)
}

// Your own test cases
// e.g.;

console.log(calculateRewards([
                    'Nil',
                    'Nil',
                    'Reward',
                    'Reward',
                    'Reward',
                    'Nil',
                    'Nil',
                    'Reward',
                    'Nil',
                    'Reward',
                    'Nil',
                    'Reward',
                    'Nil',
                    'Nil',
                    'Nil',
                    'Reward',
                    'Reward',
                    'Nil',
                    'Nil',
                    'Reward',
                    'Reward',
                    'Reward',
                    'Nil',
                    'Nil',
                    'Reward',
                    'Reward',
                    'Nil',
                    'Nil',
                    'Reward',
                    'Reward',
                    'Nil',
                    'Reward',
                    'Reward',
                    'Nil',
                    'Nil',
                    'Reward',
                    'Reward',
                    'Nil',
                    'Reward',
                    'Nil',
                    'Reward',
                    'Nil',
                    'Reward',
                    'Nil',
                    'Reward',
                    'Reward',
                    'Reward',
                    'Nil',
                    'Nil',
                    'Reward',
                ]));

module.exports = calculateRewards;
