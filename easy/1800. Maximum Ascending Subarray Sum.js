/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    const orderedNums = nums.slice()
        .map((num, index) => ({
            num: num,
            position: index,
        }))
        .sort(({ num: formerNum, position: formerPosition }, { num: latterNum, position: latterPosition }) => {
            if (formerNum !== latterNum) {
                return formerNum - latterNum;
            }

            return formerPosition - latterPosition;
        });

    let result = 0;

    orderedNums.forEach(({ num, position }, index) => {
        let sum = num;
        let lastNum = num;
        let lastPosition = position;

        for (let anotherIndex = index + 1; anotherIndex < orderedNums.length; anotherIndex += 1) {
            const { num: anotherNum, position: anotherPosition } = orderedNums[anotherIndex];

            if (lastNum >= anotherNum || position >= anotherPosition || anotherPosition > lastPosition + 1) {
                continue;
            }

            sum += anotherNum;
            lastNum = anotherNum;
            lastPosition = anotherPosition;
        }

        if (result < sum) {
            result = sum;
        }
    });

    return result;
};
