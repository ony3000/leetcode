/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const LAST_INDEX = cost.length - 1;
    const storedCosts = Array(cost.length).fill(null);

    const recursion = (index) => {
        if (storedCosts[index] !== null) {
            return storedCosts[index];
        }
        else if (index >= LAST_INDEX - 1) {
            storedCosts[index] = cost[index];

            return cost[index];
        }

        const minCost = cost[index] + Math.min(recursion(index + 1), recursion(index + 2));

        storedCosts[index] = minCost;

        return minCost;
    };

    return Math.min(recursion(0), recursion(1));
};
