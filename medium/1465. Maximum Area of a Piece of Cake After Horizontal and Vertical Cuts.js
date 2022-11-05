/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.push(h);
    verticalCuts.push(w);

    horizontalCuts.sort((former, latter) => (former - latter));
    verticalCuts.sort((former, latter) => (former - latter));

    let maxWidth = 0;
    let maxHeight = 0;

    horizontalCuts.forEach((position, index) => {
        if (index === 0) {
            maxHeight = position;
        }
        else {
            const diff = position - horizontalCuts[index - 1];

            if (maxHeight < diff) {
                maxHeight = diff;
            }
        }
    });
    verticalCuts.forEach((position, index) => {
        if (index === 0) {
            maxWidth = position;
        }
        else {
            const diff = position - verticalCuts[index - 1];

            if (maxWidth < diff) {
                maxWidth = diff;
            }
        }
    });

    return (maxWidth * maxHeight) % (10**9 + 7);
};
