/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [ ...nums1, ...nums2 ];
    mergedArray.sort((former, latter) => former - latter);

    if (mergedArray.length % 2) {
        const center = (mergedArray.length - 1) / 2;

        return mergedArray[center];
    }
    else {
        const half = mergedArray.length / 2;

        return (mergedArray[half - 1] + mergedArray[half]) / 2;
    }
};
