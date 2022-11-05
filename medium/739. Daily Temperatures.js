/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const daysPerTemperature = Array(101).fill(null).map(() => []);
    const result = Array(temperatures.length).fill(0);

    temperatures.forEach((currentTemperature, currentDay) => {
        daysPerTemperature[currentTemperature].push(currentDay);

        for (let theTemperature = 30; theTemperature < currentTemperature; theTemperature += 1) {
            daysPerTemperature[theTemperature].forEach((theDay) => {
                result[theDay] = currentDay - theDay;
            });

            daysPerTemperature[theTemperature] = [];
        }
    });

    return result;
};
