/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let maxProfit = 0;
  let buyingPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyingPrice) {
      buyingPrice = prices[i];
    } else if (prices[i] > buyingPrice) {
      const currProfit = prices[i] - buyingPrice;
      maxProfit = Math.max(currProfit, maxProfit);
    }
  }

  return maxProfit;
};

// SOLUTION 2


