/**
 * @param {number[]} arr
 * @return {number}
 */
var numFactoredBinaryTrees = function(arr) {
    const factorization = (n) => {
        const factors = [];
        let dividend = (n > 0 ? n : -n);

        while (dividend > 1) {
            const maxDivisor = Math.floor(Math.sqrt(dividend));
            let isDivisible = false;
            let divisor = 2;

            while (divisor <= maxDivisor) {
                if (dividend % divisor === 0) {
                    isDivisible = true;

                    while (dividend % divisor === 0) {
                        factors.push(divisor);
                        dividend /= divisor;
                    }

                    break;
                }

                divisor += (divisor === 2 ? 1 : 2);
            }

            if (!isDivisible) {
                factors.push(dividend);
                break;
            }
        }

        return factors;
    };

    const positiveDivisors = (n) => {
        const factors = factorization(n);
        const involutions = [];

        while (factors.length > 0) {
            const [ base ] = factors;
            const count = factors.filter((value) => (value === base)).length;

            involutions.push(Array(count + 1).fill(null).map((_, index) => (base ** index)));
            factors.splice(0, count);
        }

        const orderedDivisors = involutions.reduce((accumulator, currentValue) => {
            const products = [];

            accumulator.forEach((aValue) => {
                currentValue.forEach((bValue) => {
                    products.push(aValue * bValue);
                });
            });

            return products;
        }, [1]);
        orderedDivisors.sort((former, latter) => (former - latter));

        return orderedDivisors;
    };

    const store = {};

    const checkTreeCounter = (num) => {
        if (store[num]) {
            return store[num];
        }

        const divisors = positiveDivisors(num).slice(1, -1);
        let result = 1n;

        divisors.forEach((leftChild) => {
            const rightChild = num / leftChild;

            if (!arr.includes(leftChild) || !arr.includes(rightChild)) {
                return;
            }

            result += (checkTreeCounter(leftChild) * checkTreeCounter(rightChild));
        });
        store[num] = result;

        return result;
    };

    let result = 0n;

    arr.forEach((num) => {
        result += checkTreeCounter(num);
    });

    return Number(result % (10n ** 9n + 7n));
};
