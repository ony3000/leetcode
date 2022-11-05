/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if (amount === 0) {
        return 0;
    }

    coins = coins.filter((coin) => (coin <= amount));
    coins = [...new Set(coins)];
    coins.sort((former, latter) => (latter - former));

    const NUMBER_OF_COINS = coins.length;
    const slicedCoins = Array(1 + NUMBER_OF_COINS).fill(null).map((_, index) => coins.slice(index));

    let minCount = amount + 1;

    const checkCoinPartitions = (depth, n, partialCount) => {
        if (n === 0) {
            const totalCount = partialCount;

            if (minCount > totalCount) {
                minCount = totalCount;
            }

            return;
        }
        else if (depth === NUMBER_OF_COINS) {
            return;
        }
        else if (depth === NUMBER_OF_COINS - 1) {
            const largestPart = slicedCoins[depth][0];

            if (n % largestPart === 0) {
                const totalCount = partialCount + n / largestPart;

                if (minCount > totalCount) {
                    minCount = totalCount;
                }
            }

            return;
        }

        const largestPart = slicedCoins[depth][0];
        const quotient = Math.floor(n / largestPart);
        const maxAvailableCount = Math.min(quotient, minCount - partialCount);

        for (let usedCount = maxAvailableCount; usedCount >= 0; usedCount -= 1) {
            const remainder = n - largestPart * usedCount;

            if (partialCount + usedCount < minCount) {
                checkCoinPartitions(depth + 1, remainder, partialCount + usedCount);
            }
        }
    };

    checkCoinPartitions(0, amount, 0);

    return (minCount > amount ? -1 : minCount);
};
