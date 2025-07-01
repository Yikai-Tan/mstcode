function checkFreeAdmission(X, visitorAge) {
    arrayx =[]
    if(X>=90){
        arrayx.push(9)
        X-=90
    }
    else if (X>=80){
        arrayx.push(8)
        X-=80
    }
    else if (X>=70){
        arrayx.push(7)
        X-=70
    }
    else if (X>=60){
        arrayx.push(6)
        X-=60
    }
    else if (X>=50){
        arrayx.push(5)
        X-=50
    }
    else if (X>=40){
        arrayx.push(4)
        X-=40
    }
    else if (X>=30){
        arrayx.push(3)
        X-=30
    }
    else if (X>=20){
        arrayx.push(2)
        X-=20
    }
    else if (X>=10){
        arrayx.push(1)
        X-=10
    }
    arrayx.push(X)

    numofvis=[]
    if(visitorAge>=90){
        numofvis.push(9)
        visitorAge-=90
    }
    else if (visitorAge>=80){
        numofvis.push(8)
        visitorAge-=80
    }
    else if (visitorAge>=70){
        numofvis.push(7)
        visitorAge-=70
    }
    else if (visitorAge>=60){
        numofvis.push(6)
        visitorAge-=60
    }
    else if (visitorAge>=50){
        numofvis.push(5)
        visitorAge-=50
    }
    else if (visitorAge>=40){
        numofvis.push(4)
        visitorAge-=40
    }
    else if (visitorAge>=30){
        numofvis.push(3)
        visitorAge-=30
    }
    else if (visitorAge>=20){
        numofvis.push(2)
        visitorAge-=20
    }
    else if (visitorAge>=10){ 
        numofvis.push(1)
        visitorAge-=10
    }
    numofvis.push(visitorAge)
    console.log(arrayx,numofvis)
    if((numofvis.includes(arrayx[0]))||(numofvis.includes(arrayx[1]))){
        return true
    }
    else return false
/*     if(visitorAge.includes(thing[0])||visitorAge.includes(thing[1])){
        return true
    } */
}

// Your own test cases
// e.g.;
console.log(checkFreeAdmission(10,20))
console.log(checkFreeAdmission(3, [12, 13, 21, 33, 18, 23, 31, 32, 33]));

module.exports = checkFreeAdmission;
