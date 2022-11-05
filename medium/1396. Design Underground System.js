
var UndergroundSystem = function() {
    this.checkins = {};
    this.travels = [];
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkins[id] = {
        start: stationName,
        tick: t,
    };
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const { start, tick } = this.checkins[id];

    this.travels.push({
        start,
        end: stationName,
        time: t - tick,
    });

    delete this.checkins[id];
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const travels = this.travels.filter(({ start, end }) => (startStation === start && endStation === end));
    const totalTime = travels.reduce((accumulator, { time }) => (accumulator + time), 0);

    return totalTime / travels.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
