/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const vowelPatterns = {};
    const wordlistPerVowelPattern = [];

    wordlist.forEach((word) => {
        const lowerCasedWord = word.toLowerCase();
        const underscorePattern = lowerCasedWord.replace(/[aeiou]/g, '_');

        if (vowelPatterns[underscorePattern] === undefined) {
            vowelPatterns[underscorePattern] = wordlistPerVowelPattern.length;
            wordlistPerVowelPattern.push({
                vowelPattern: underscorePattern,
                casePatterns: {},
                wordlistPerCasePattern: [],
            });
        }

        const vowelPatternIndex = vowelPatterns[underscorePattern];
        const { casePatterns, wordlistPerCasePattern } = wordlistPerVowelPattern[vowelPatternIndex];

        if (casePatterns[lowerCasedWord] === undefined) {
            casePatterns[lowerCasedWord] = wordlistPerCasePattern.length;
            wordlistPerCasePattern.push({
                pattern: lowerCasedWord,
                wordlist: [word],
            });
        }
        else {
            wordlistPerCasePattern[casePatterns[lowerCasedWord]].wordlist.push(word);
        }
    });

    return queries.map((query) => {
        if (wordlist.includes(query)) {
            return query;
        }

        const lowerCasedQuery = query.toLowerCase();
        const underscorePattern = lowerCasedQuery.replace(/[aeiou]/g, '_');

        for (let vowelPatternIndex = 0; vowelPatternIndex < wordlistPerVowelPattern.length; vowelPatternIndex += 1) {
            const { vowelPattern, wordlistPerCasePattern } = wordlistPerVowelPattern[vowelPatternIndex];

            if (underscorePattern === vowelPattern) {
                if (wordlistPerCasePattern.length === 1) {
                    return wordlistPerCasePattern[0].wordlist[0];
                }

                for (let casePatternIndex = 0; casePatternIndex < wordlistPerCasePattern.length; casePatternIndex += 1) {
                    const { pattern, wordlist } = wordlistPerCasePattern[casePatternIndex];

                    if (lowerCasedQuery === pattern) {
                        return wordlist.includes(query) ? query : wordlist[0];
                    }
                }

                return wordlistPerCasePattern[0].wordlist[0];
            }
        }

        return '';
    });
};
