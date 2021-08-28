function checkCashRegister(price, cash, cid) {
    let registerObject = {
        status: "OPEN",
        change: []
    };
    var amountToChange = cash-price;
    var cidAdded = 0;
    for (let a = 0; a < cid.length; a++) {
        cidAdded = cidAdded+cid[a][1];
    }
    if (cidAdded < amountToChange) {
        registerObject.status = "INSUFFICIENT_FUNDS";
        registerObject.change = [];
        return registerObject;
    } else if (cidAdded === amountToChange) {
        registerObject.status = "CLOSED";
        registerObject.change = cid;
        return registerObject;
    }

    var changeVarHundred = 0;
    var changeVarTwenty = 0;
    var changeVarTen = 0;
    var changeVarFive = 0;
    var changeVarOne = 0;
    var changeVarQuarter = 0;
    var changeVarDime = 0;
    var changeVarNickel = 0;
    var changeVarPenny = 0;

   if (cid[8][1] > 0 && amountToChange >= 100) { //ONE HUNDRED
    var tempVarHundred = cid[8][1];
    let tempChangeVar = amountToChange;
    do {
    tempVarHundred = tempVarHundred - 100;
    changeVarHundred = changeVarHundred + 100;
    amountToChange = amountToChange - 100;
    } while (tempChangeVar > changeVarHundred && tempVarHundred > 0 && amountToChange > 99);
    registerObject.change.push(["ONE HUNDRED", changeVarHundred]);
   }

   if (cid[7][1] > 0 && amountToChange >= 20) { //TWENTY
    var tempVarTwenty = cid[7][1];
    let tempChangeVar = amountToChange;
    do {
    tempVarTwenty = tempVarTwenty - 20;
    changeVarTwenty = changeVarTwenty + 20;
    amountToChange = amountToChange - 20;
    } while (tempChangeVar > changeVarTwenty && tempVarTwenty > 0 && amountToChange > 19);
    registerObject.change.push(["TWENTY", changeVarTwenty]);
   }

   if (cid[6][1] > 0 && amountToChange >= 10) { //TEN
    var tempVarTen = cid[6][1];
    let tempChangeVar = amountToChange;
    do {
    tempVarTen = tempVarTen - 10;
    changeVarTen = changeVarTen + 10;
    amountToChange = amountToChange - 10;
    } while (tempChangeVar > changeVarTen && tempVarTen > 0 && amountToChange > 9);
    registerObject.change.push(["TEN", changeVarTen]);
   }

   if (cid[5][1] > 0 && amountToChange >= 5) { //FIVE
    var tempVarFive = cid[5][1];
    let tempChangeVar = amountToChange;
    do {
    tempVarFive = tempVarFive - 5;
    changeVarFive = changeVarFive + 5;
    amountToChange = amountToChange - 5;
    } while (tempChangeVar > changeVarFive && tempVarFive >= 0 && amountToChange > 4);
    registerObject.change.push(["FIVE", changeVarFive]);
   }

   if (cid[4][1] > 0 && amountToChange >= 1) { //ONE
    var tempVarOne = cid[4][1];
    let tempChangeVar = amountToChange;
    do {
    tempVarOne = tempVarOne - 1;
    changeVarOne = changeVarOne + 1;
    amountToChange = amountToChange - 1;
    } while (tempChangeVar > changeVarOne && tempVarOne >= 0 && amountToChange > 0.99);
    registerObject.change.push(["ONE", changeVarOne]);
   }

   if (cid[3][1] > 0 && amountToChange >= 0.25) { //QUARTER
    var tempVarQuarter = cid[3][1];
    let tempChangeVar = amountToChange;
    do {
    tempVarQuarter = tempVarQuarter - 0.25;
    changeVarQuarter = changeVarQuarter + 0.25;
    amountToChange = amountToChange - 0.25;
    } while (tempChangeVar > changeVarQuarter && tempVarQuarter >= 0 && amountToChange > .24);
    registerObject.change.push(["QUARTER", changeVarQuarter]);
   }

   if (cid[2][1] > 0 && amountToChange >= 0.1) { //DIME
    var tempVarDime = cid[2][1];
    let tempChangeVar = amountToChange;
    do {
    tempVarDime = tempVarDime - 0.1;
    changeVarDime = changeVarDime + 0.1;
    amountToChange = amountToChange - 0.1;
    } while (tempChangeVar > changeVarDime && tempVarDime >= 0 && amountToChange > .09);
    registerObject.change.push(["DIME", changeVarDime]);
   }

   if (cid[1][1] > 0 && amountToChange >= 0.05) { //NICKEL
    var tempVarNickel = cid[1][1];
    let tempChangeVar = amountToChange;
    do {
    tempVarNickel = tempVarNickel - 0.05;
    changeVarNickel = changeVarNickel + 0.05;
    amountToChange = amountToChange - 0.05;
    } while (tempChangeVar > changeVarNickel && tempVarNickel >= 0 && amountToChange > .04);
    registerObject.change.push(["NICKEL", changeVarNickel]);
   }

   if (cid[0][1] > 0 && amountToChange >= 0.01) { //PENNY
    var tempVarPenny = cid[0][1];
    let tempChangeVar = amountToChange;
    do {
    tempVarPenny = tempVarPenny - 0.01;
    changeVarPenny = changeVarPenny + 0.01;
    amountToChange = amountToChange - 0.01;
    } while (tempChangeVar > changeVarPenny && tempVarPenny >= 0 && amountToChange > 0);
    registerObject.change.push(["PENNY", changeVarPenny]);
   }

   if (amountToChange > 0) {
    registerObject.status = "INSUFFICIENT_FUNDS";
    registerObject.change = [];
    return registerObject;
   }
    
    return registerObject;
}

    
    
    console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
