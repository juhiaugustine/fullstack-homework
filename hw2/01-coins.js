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
  
  let dollarString = "";
  let quarterString = "";
  let dimeString = "";
  let nickelString = "";
  let penniesString = "";

  dollarString = dollars == 0 ? "" 
                : dollars == 1 ? dollars.toString() + " dollar, "
                : dollars.toString() + " dollars, ";

  quarterString = quarters == 0 ? "" 
                : quarters == 1 ? quarters.toString() + " quarter, "
                : quarters.toString() + " quarters, ";

  dimeString = dimes == 0 ? "" 
                : dimes == 1 ? dimes.toString() + " dime, "
                : dimes.toString() + " dimes, ";

  nickelString = nickels == 0 ? "" 
                : nickels == 1 ? nickels.toString() + " nickel, "
                : nickels.toString() + " nickels, ";

  penniesString = pennies == 0 ? "" 
                : pennies == 1 ? pennies.toString() + " penny"
                : pennies.toString() + " pennies";

  result = dollarString + quarterString + dimeString + nickelString + penniesString;
  return result;
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