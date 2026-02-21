/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  let obj = {
    tipPercentage : 0 ,
    tipAmount : 0,
    totalAmount : 0
  }

  if(billAmount <= 0) obj = null ;
   
  else if(serviceRating === 1){ 
    obj.tipPercentage = 5;
    obj.tipAmount = obj.tipPercentage*(billAmount)/100;
    obj.totalAmount = billAmount + obj.tipAmount;
  }
  else if(serviceRating ===2){ 
    obj.tipPercentage = 10.00;
    obj.tipAmount = obj.tipPercentage*(billAmount)/100;
    obj.totalAmount = billAmount + obj.tipAmount;
  }
  else if(serviceRating === 3){ 
    obj.tipPercentage = 15.00;
    obj.tipAmount = obj.tipPercentage*(billAmount)/100;
    obj.totalAmount = billAmount + obj.tipAmount;
  }
  else if(serviceRating === 4){ 
    obj.tipPercentage = 20.00;
    obj.tipAmount = obj.tipPercentage*(billAmount)/100;
    obj.totalAmount = billAmount + obj.tipAmount;
  }
  else if(serviceRating === 5){ 
    obj.tipPercentage = 25.00;
     obj.tipAmount = obj.tipPercentage*(billAmount)/100;
    obj.totalAmount = billAmount + obj.tipAmount;
  }
  else obj = null; 

  return obj;
}
