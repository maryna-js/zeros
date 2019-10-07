module.exports = function zeros(expression) {
  let arrForPushDouble = [];
  let arrForPushOne = [];
  let arrForPushCount = [];
  let arrForPushCountOne = [];
  let counter = 0;
  let counterOne = 0;
  let counterAll = 0;
  let arrCheck;
  //проверяю, чтобы каждый элемент не был нечетным
  arrCheck = expression.split("*").join("").replace(/\!/g, ",").split(",").map(Number).filter(function(item) { 
    return item !== 0;
});
  if (((arrCheck.every(elem => elem % 2 == 1)) == true) && (arrCheck.length>2)) {counterAll = 0;} 
  else {
  //привожу к виду ! одиночный факториал, без! - двойной факторил
  let arrOfExpr = expression.split("!!").join("").split("*");
  for (var z = 0; z<arrOfExpr.length; z++) {
    //если false то это двойной факториал
    if(isNaN(arrOfExpr[z]) == false) {
      arrForPushDouble.push(arrOfExpr[z]);
    }
    else {arrForPushOne.push(arrOfExpr[z]);}
  }



  //считаю нули у двойного факториала
  for (var k = 0; k<arrForPushDouble.length; k++) {
    let n = arrForPushDouble[k];
    //если элемент массива четное
    if (n % 2==0) {
    //в массив все четные числа факториала начиная с 5    
    for (let i = 5; i <= n; i++) { 
      if (i % 2==0)
      arrForPushCount.push(i); 
      }
    }
    //если эементы массива не четные 
  else {
    for (let i = 5; i <= n; i++) { 
      if (i % 2==1)
      arrForPushCount.push(i); 
    }

  }
}
for (var m = 0; m < arrForPushCount.length; m++) {
  if ((arrForPushCount[m] % 5) == 0)  {
      counter++;
      if ((arrForPushCount[m]) == 50 || (arrForPushCount[m]) == 25) {counter++;}
      if ((arrForPushCount[m]) == 100 || (arrForPushCount[m]) == 75) {counter++;}
  }

}
  
//привожу массив одиночного факториала к виду массив без !
arrForPushOne = arrForPushOne.join("").replace(/\!/g, ",").split(",").map(Number).filter(function(item) { 
  return item !== 0;
});


for (var k = 0; k<arrForPushOne.length; k++) {
  let n = arrForPushOne[k];
  //вывожу в массив все числа факториала начиная с 5    
  for (let i = 5; i <= n; i++) { 
    arrForPushCountOne.push(i); 
  }
}
for (var m = 0; m < arrForPushCountOne.length; m++) {
  if ((arrForPushCountOne[m] % 5) == 0) {
    counterOne++;
    if ((arrForPushCountOne[m]) == 50 || (arrForPushCountOne[m]) == 25) {counterOne++;}
    if ((arrForPushCountOne[m]) == 100 || (arrForPushCountOne[m]) == 75) {counterOne++;}
  }

}

counterAll = counter+counterOne;
  }
return counterAll;



 
}