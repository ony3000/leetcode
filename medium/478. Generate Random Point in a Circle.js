/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
var Solution = function(radius, x_center, y_center) {
    this.radius = radius;
    this.xCenter = x_center;
    this.yCenter = y_center;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function() {
    let xPoint = null;
    let yPoint = null;

    do {
        xPoint = Math.random() * 2 * this.radius - this.radius + this.xCenter;
        yPoint = Math.random() * 2 * this.radius - this.radius + this.yCenter;
    } while ((xPoint - this.xCenter) ** 2 + (yPoint - this.yCenter) ** 2 > this.radius ** 2);

    return [xPoint, yPoint];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
