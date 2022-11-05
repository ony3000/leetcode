
var Fancy = function() {
    this.sequence = [];
};

/**
 * @param {number} val
 * @return {void}
 */
Fancy.prototype.append = function(val) {
    this.modulo = 10 ** 9 + 7;
    this.sequence.push(val);
};

/**
 * @param {number} inc
 * @return {void}
 */
Fancy.prototype.addAll = function(inc) {
    for (let index = 0; index < this.sequence.length; index += 1) {
        this.sequence[index] = (this.sequence[index] + inc) % this.modulo;
    }
};

/**
 * @param {number} m
 * @return {void}
 */
Fancy.prototype.multAll = function(m) {
    for (let index = 0; index < this.sequence.length; index += 1) {
        this.sequence[index] = (this.sequence[index] * m) % this.modulo;
    }
};

/**
 * @param {number} idx
 * @return {number}
 */
Fancy.prototype.getIndex = function(idx) {
    return (idx >= this.sequence.length ? -1 : this.sequence[idx]);
};

/**
 * Your Fancy object will be instantiated and called as such:
 * var obj = new Fancy()
 * obj.append(val)
 * obj.addAll(inc)
 * obj.multAll(m)
 * var param_4 = obj.getIndex(idx)
 */
