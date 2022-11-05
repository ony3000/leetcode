/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    if (
        IP.match(/^(?:\d|[1-9]\d+)(?:\.(?:\d|[1-9]\d+)){3}$/)
            && IP.split('.').map((str) => parseInt(str)).every((num) => (num >= 0 && num < 256))
    ) {
        return 'IPv4';
    }
    else if (
        IP.match(/^[\da-f]{1,4}(?::[\da-f]{1,4}){7}$/i)
            && IP.split(':').map((str) => parseInt(str, 16)).every((num) => (num >= 0 && num < 16**4))
    ) {
        return 'IPv6';
    }
    else {
        return 'Neither';
    }
};
