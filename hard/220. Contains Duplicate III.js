/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (k === 0) {
        return false;
    }

    const counter = {};
    const orderedNums = [];

    const binarySearch = (ordered, key) => {
        const FIRST_INDEX = 0;
        const LAST_INDEX = ordered.length - 1;
        const MAX_REPEAT = ordered.length;

        if (key < ordered[FIRST_INDEX]) {
            return FIRST_INDEX;
        }
        if (key > ordered[LAST_INDEX]) {
            return LAST_INDEX;
        }

        let sentinel = 0;
        let startIndex = FIRST_INDEX;
        let endIndex = LAST_INDEX;
        let centerIndex = Math.floor((startIndex + endIndex) / 2);

        while (sentinel < MAX_REPEAT && startIndex < endIndex) {
            if (key < ordered[centerIndex]) {
                endIndex = centerIndex;
            }
            else if (key > ordered[centerIndex]) {
                startIndex = centerIndex;
            }
            else {
                return centerIndex;
            }

            sentinel += 1;
            centerIndex = Math.floor((startIndex + endIndex) / 2);
        }

        if (sentinel >= MAX_REPEAT) {
            return endIndex;
        }
        else {
            return centerIndex;
        }
    };

    for (let index = 0; index < nums.length; index += 1) {
        if (index > k) {
            const oldIndex = index - (k + 1);
            const oldNum = nums[oldIndex];
            const oldOrderedIndex = binarySearch(orderedNums, oldNum);

            delete counter[oldNum];
            orderedNums.splice(oldOrderedIndex, 1);
        }

        const num = nums[index];

        if (counter[num]) {
            return true;
        }

        counter[num] = 1;

        const targetIndex = binarySearch(orderedNums, num);

        if (
            (orderedNums[targetIndex] !== undefined && Math.abs(orderedNums[targetIndex] - num) <= t)
                || (orderedNums[targetIndex - 1] !== undefined && Math.abs(orderedNums[targetIndex - 1] - num) <= t)
        ) {
            return true;
        }

        if (orderedNums.length === 0) {
            orderedNums.push(num);
        }
        else {
            const insertPosition = binarySearch(orderedNums, num);

            if (num < orderedNums[insertPosition]) {
                orderedNums.splice(insertPosition, 0, num);
            }
            else {
                orderedNums.splice(insertPosition + 1, 0, num);
            }
        }
    }

    return false;
};
