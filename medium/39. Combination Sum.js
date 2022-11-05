/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const orderedCandidates = candidates.slice();
    orderedCandidates.sort((former, latter) => (latter - former));

    const recursiveClosure = (availableCandidates, num) => {
        if (num === 0 || availableCandidates.length === 0) {
            return [ [] ];
        }
        else if (availableCandidates.length === 1) {
            const [ largestCandidate ] = availableCandidates;

            return (num % largestCandidate === 0 ? [ Array(num / largestCandidate).fill(largestCandidate) ] : null);
        }
        else {
            const result = [];

            const [ largestCandidate ] = availableCandidates;
            const maxAvailableCount = Math.floor(num / largestCandidate);
            const restCandidates = availableCandidates.slice(1);

            for (let usedCount = maxAvailableCount; usedCount >= 0; usedCount -= 1) {
                const remainder = num - largestCandidate * usedCount;
                const combinations = recursiveClosure(restCandidates, remainder);

                if (combinations !== null) {
                    const temp = Array(usedCount).fill(largestCandidate);

                    combinations.forEach((combination) => {
                        combination.push(...temp);
                    });

                    result.push(...combinations);
                }
            }

            return result;
        }
    };

    return recursiveClosure(orderedCandidates, target) || [];
};
