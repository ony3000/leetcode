/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const indexPerNumber = arr2.map((num, index) => ({ num, index })).reduce((acc, { num, index }) => ({ ...acc, [num]: index }), {});
    const LARGEST_INDEX = arr2.length;

    const result = arr1.slice().sort((former, latter) => {
        if (indexPerNumber[former] !== undefined || indexPerNumber[latter] !== undefined) {
            return (indexPerNumber[former] ?? LARGEST_INDEX) - (indexPerNumber[latter] ?? LARGEST_INDEX);
        }
        else {
            return former - latter;
        }
    });

    return result;
};
