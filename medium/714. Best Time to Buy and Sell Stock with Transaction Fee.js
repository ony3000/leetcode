/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    const DECREASING = -1;
    const KEEP = 0;
    const INCREASING = 1;

    const diffs = [];
    let prevPrice = null;
    let diffState = null;
    let partialDiff = 0;

    // price간의 diff를 계산한다. 연속되는 diff의 부호가 같을 경우, 한 덩어리로 병합.
    prices.forEach((price) => {
        if (prevPrice !== null) {
            if (prevPrice > price) {
                if (diffState === INCREASING) {
                    diffs.push(partialDiff);
                    partialDiff = 0;
                }

                partialDiff += (price - prevPrice);
                diffState = DECREASING;
            }
            else if (prevPrice < price) {
                if (diffState === DECREASING) {
                    diffs.push(partialDiff);
                    partialDiff = 0;
                }

                partialDiff += (price - prevPrice);
                diffState = INCREASING;
            }
            else {
                if (diffState === null) {
                    diffState = KEEP;
                }
            }
        }

        prevPrice = price;
    });

    // 마지막 diff가 음수일 경우 무시.
    if (partialDiff > 0) {
        diffs.push(partialDiff);
    }

    // 처음 diff가 음수일 경우 버림.
    for (let index = 0; index < diffs.length; index += 1) {
        if (diffs[index] >= 0) {
            diffs.splice(0, index);
            break;
        }
    }

    let didPositiveMerge = null;
    let didNegativeMerge = null;

    while (true) {
        didPositiveMerge = false;

        // 음수 diff 양 옆의 양수 diff가 충분히 클 경우, 하나의 양수 diff로 병합.
        for (let index = diffs.length - 1; index >= 0; index -= 1) {
            const diff = diffs[index];

            if (diff < 0) {
                const prevDiff = diffs[index - 1];
                const nextDiff = diffs[index + 1];

                if (Math.abs(diff) <= fee && diff + prevDiff >= 0 && diff + nextDiff >= 0) {
                    const sum = prevDiff + diff + nextDiff;

                    diffs.splice(index - 1, 3, sum);
                    didPositiveMerge = true;
                }
            }
        }

        if (didPositiveMerge === false && didNegativeMerge === false) {
            break;
        }

        didNegativeMerge = false;

        // 양수 diff 양 옆의 음수 diff가 충분히 클 경우, 하나의 음수 diff로 병합.
        for (let index = diffs.length - 1; index >= 0; index -= 1) {
            const diff = diffs[index];

            if (diff > 0 && index > 0 && index < diffs.length - 1) {
                const prevDiff = diffs[index - 1];
                const nextDiff = diffs[index + 1];

                if (Math.abs(diff) <= fee && diff + prevDiff < 0 && diff + nextDiff < 0) {
                    const sum = prevDiff + diff + nextDiff;

                    diffs.splice(index - 1, 3, sum);
                    didNegativeMerge = true;
                }
            }
        }

        if (didPositiveMerge === false && didNegativeMerge === false) {
            break;
        }
    }

    const diffIntervals = [];
    let startIndex = 0;

    // 절대값이 fee보다 큰 음수 diff가 있을 경우, 전체 diff를 그 diff 기준 앞뒤로 나눔.
    diffs.forEach((diff, index) => {
        if (diff < 0 && Math.abs(diff) > fee) {
            diffIntervals.push(diffs.slice(startIndex, index));
            startIndex = index + 1;
        }
    });

    if (startIndex < diffs.length) {
        diffIntervals.push(diffs.slice(startIndex));
    }

    let result = 0;

    // 각 구간별 이익 계산.
    diffIntervals.forEach((interval) => {
        const FIRST_INDEX = 0;
        const LAST_INDEX = interval.length - 1;

        interval.forEach((diff, index) => {
            if (diff < 0) {
                if (index > FIRST_INDEX) {
                    if (diff + interval[index - 1] < 0) {
                        if (index > FIRST_INDEX + 2) {
                            if (diff + interval[index - 1] + interval[index - 2] + interval[index - 3] < 0) {
                                interval[index] = null;
                                interval[index - 1] = null;
                            }
                        }
                        else {
                            interval[index] = null;
                            interval[index - 1] = null;
                        }
                    }
                }

                if (index < LAST_INDEX) {
                    if (diff + interval[index + 1] < 0) {
                        if (index < LAST_INDEX - 2) {
                            if (diff + interval[index + 1] + interval[index + 2] + interval[index + 3] < 0) {
                                interval[index] = null;
                                interval[index + 1] = null;
                            }
                        }
                        else {
                            interval[index] = null;
                            interval[index + 1] = null;
                        }
                    }
                }
            }
        });

        let prevDiff = null;
        let partialResult = 0;

        interval.forEach((diff, index) => {
            if (diff > 0) {
                partialResult += diff;
            }
            else if (diff < 0) {
                if (interval[index + 1] === null) {
                    if (partialResult - fee > 0) {
                        result += (partialResult - fee);
                    }
                    partialResult = 0;
                    prevDiff = null;
                    return;
                }
                else if (prevDiff !== null) {
                    partialResult += diff;
                }
            }
            else if (diff === null) {
                if (prevDiff !== null) {
                    if (partialResult - fee > 0) {
                        result += (partialResult - fee);
                    }
                    partialResult = 0;
                }
            }

            prevDiff = diff;
        });

        if (partialResult - fee > 0) {
            result += (partialResult - fee);
        }
    });

    return result;
};
