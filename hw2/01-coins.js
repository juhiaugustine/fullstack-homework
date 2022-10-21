/** Exercise 01 - Coins **/

const calculateChange = (input) => {
  if (input > 10) return "Error: the number is too large"

  let amountInCents = input * 100; // 4.62 -> 462

  let dollars = Math.floor(amountInCents/100); // 4
  amountInCents = amountInCents - (dollars*100); // 62

  let quarters = Math.floor(amountInCents/25); //2
  amountInCents = amountInCents - (quarters * 25); // 12

  let dimes = Math.floor(amountInCents/10); // 1
  amountInCents = amountInCents - (dimes * 10); // 2

  let nickels = Math.floor(amountInCents/5); // 0
  amountInCents = amountInCents - (nickels * 5); // 2

  let pennies = amountInCents;
  
  const dollarString = getCoinConverterString(dollars," dollar, "," dollars, ");
  const quarterString = getCoinConverterString(quarters," quarter, "," quarters, ");
  const dimeString = getCoinConverterString(dimes," dime, "," dimes, ");
  const nickelString = getCoinConverterString(nickels," nickel, "," nickels, ");
  const penniesString = getCoinConverterString(pennies," penny"," pennies");

  result = dollarString + quarterString + dimeString + nickelString + penniesString;
  return result;
};

function getCoinConverterString(change, singularString, pluralString){
    
  const resultString = change == 0 ? "" 
              : change == 1 ? change.toString() + singularString
              : change.toString() + pluralString;
  return resultString;
};   

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
