/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var threeSumMulti = function(arr, target) {
    const counter = {};
    const uniqueParts = [];

    arr.forEach((num) => {
        if (counter[num] === undefined) {
            uniqueParts.push(num);
            counter[num] = 0;
        }
        counter[num] += 1;
    });

    uniqueParts.sort((former, latter) => (latter - former));

    let result = 0n;

    const calculateCombinations = (n, r) => {
        const bigN = BigInt(n);
        const bigR = BigInt(Math.min(r, n - r));

        if (bigR === 0n) {
            return 1n;
        }

        let numerator = 1n;
        let denominator = 1n;

        for (let index = 0; index < r; index += 1) {
            numerator *= BigInt(n - index);
            denominator *= BigInt(1 + index);
        }

        return numerator / denominator;
    };

    const checkPartitions = (num, availableCount, parts, usedParts) => {
        if (num === 0 && availableCount === 0) {
            let partialResult = 1n;

            Object.keys(usedParts).forEach((key) => {
                partialResult *= calculateCombinations(counter[key], usedParts[key]);
            });

            result += partialResult;
            return;
        }
        else if (availableCount === 0 || parts.length === 0) {
            return;
        }

        const largestPart = parts[0];
        const maxAvailableCount = (
            Number.isNaN(num / largestPart)
                ? Math.min(3, counter[largestPart])
                : Math.min(3, Math.floor(num / largestPart), counter[largestPart])
        );

        for (let usedCount = maxAvailableCount; usedCount >= 0; usedCount -= 1) {
            const remainder = num - largestPart * usedCount;

            if (usedCount <= availableCount) {
                const slicedParts = parts.slice(1).filter((p) => (p <= remainder));
                const newUsedParts = { ...usedParts };

                if (usedCount) {
                    newUsedParts[largestPart] = usedCount;
                }

                checkPartitions(
                    remainder,
                    availableCount - usedCount,
                    slicedParts,
                    newUsedParts,
                );
            }
        }
    };

    checkPartitions(target, 3, uniqueParts.slice(), {});

    return Number(result % (10n ** 9n + 7n));
};
