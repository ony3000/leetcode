/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const storedFibonacci = {
        1: 1,
        2: 2,
    };
    const fibonacci = (n) => {
        if (n <= 2) {
            return n;
        }

        const prevValue = storedFibonacci[n - 1] ? storedFibonacci[n - 1] : fibonacci(n - 1);
        const morePrevValue = storedFibonacci[n - 2] ? storedFibonacci[n - 2] : fibonacci(n - 2);
        const result = prevValue + morePrevValue;

        if (!storedFibonacci[n]) {
            storedFibonacci[n] = result;
        }

        return result;
    };

    return fibonacci(n);
};
