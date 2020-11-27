function carPayment(carPrinciple2, carMonths2, carInt2) {
  let carPaymentCalc = (carPrinciple2 / carMonths2) * ((carInt2 / 100) + 1)
  return carPaymentCalc
}

btnCar.onclick=function(){

  let carPrinciple = "" 
  let carInterest = ""
  let carMonths = ""

  carPrinciple = Number(inptPrinciple.value)
  carInt = (Number(inptMonthlyInt.value)) / 100
  console.log(carInt)
  carMonths= Number(inptMonths.value)

  let carTotal = carPayment (carPrinciple, carMonths, carInt)
  lblmessage.value =`A car loan for ${carPrinciple} over ${carMonths} months at ${carInt} interest would have a monthly payment of ${carTotal}`
}


//house loan

  function homePmt (homePrinciple, homeYrs, homeInt) {
    let carPaymentCalc = (homePrinciple / homeYrs * 12) * ((homeInt/ 100) + 1);
    return homePmt;
  };

let homePrinciple = "" ;
let homeYrs = "";
let homeInt = "";
let homeTotal = "";

btnHouse.onclick=function(){
  homePrinciple = inptPrinciple.value
  homeInt= inptMonthlyInt.value
  carYears= inptYears.value
  homeYrs = inptYears.value
  homeTotal = homePmt;

  lblmessage2.value = `A home loan for ${homePrinciple} over ${homeYrs} years at ${homeInt} would have a monthly payment of ${homeTotal}`

}


