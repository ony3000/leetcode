/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let answer = '';

    let digits = Array(n).fill(null).map((_, index) => String(index + 1));
    let order = k - 1;

    const factorial = (n) => (n === 0 ? 1 : n * factorial(n - 1));

    for (let num = digits.length - 1; num >= 0; num -= 1) {
        const permutationCount = factorial(num);
        const quotient = Math.floor(order / permutationCount);

        answer += digits[quotient];
        digits.splice(quotient, 1);
        order %= permutationCount;
    }

    return answer;
};
