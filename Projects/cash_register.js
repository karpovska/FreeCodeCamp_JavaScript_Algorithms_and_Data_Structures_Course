/* Cash Register
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/
function checkCashRegister(price, cash, cid) {
    let change = {
      status: "",
      change: []
    };
    let changeToGive = cash * 100 - price * 100;  
    let changeSum = 0;  
    for(let i of cid){
      //while(changeAmount >= cid[i]){
        //change.change += i;
        //changeAmount -= cid[i];
      //}    
      changeSum += i[1] * 100;
    }  
    if(price > changeSum){
      change.status = "INSUFFICIENT_FUNDS";    
    } else if (changeToGive === changeSum){
      change.status = "CLOSED";
      change.change = cid;    
    } else {
      let coins = cid.reverse();
      let moneyUnits = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.1,
        "NICKEL": 0.05,
        "PENNY": 0.01
      }
      //console.log(coins);
      for(let coin of coins){      
        change.status = "OPEN";
        let coinTypes = [coin[0], 0];      
        while(changeToGive / 100 >= moneyUnits[coin[0]] && coin[1] > 0){
          changeToGive -= moneyUnits[coin[0]] * 100;
          coin[1] -= moneyUnits[coin[0]];
          coinTypes[1] += moneyUnits[coin[0]]
        }
        //console.log(coinTypes)
        if(coinTypes[1] > 0){
          change.change.push(coinTypes);
        }
      }
      if(changeToGive > 0){
        change.status = "INSUFFICIENT_FUNDS";
        change.change = [];
      }
    }
    //console.log(changeSum);  
    return change;
  }
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));