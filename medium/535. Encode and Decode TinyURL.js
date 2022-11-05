/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    globalThis.shortUrlDict = globalThis.shortUrlDict || {};

    if (globalThis.shortUrlDict[longUrl]) {
        return globalThis.shortUrlDict[longUrl];
    }

    const NUMBER_OF_CHARS = 62;
    const availableChars = Array(NUMBER_OF_CHARS).fill(null).map((_, index) => {
        if (index < 10) {
            return String(index);
        }
        else if (index < 36) {
            return String.fromCharCode(index - 10 + 'a'.charCodeAt(0));
        }
        else {
            return String.fromCharCode(index - 36 + 'A'.charCodeAt(0));
        }
    });
    const hash = Array(7).fill(null).map(() => availableChars[Math.floor(Math.random() * NUMBER_OF_CHARS)]).join('');

    globalThis.shortUrlDict[longUrl] = hash;
    globalThis.shortUrlDict[hash] = longUrl;

    return hash;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    globalThis.shortUrlDict = globalThis.shortUrlDict || {};

    return globalThis.shortUrlDict[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
