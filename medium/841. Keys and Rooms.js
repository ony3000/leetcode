/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visitInfo = Array(rooms.length).fill(false);

    const recursiveClosure = (roomNo) => {
        if (visitInfo[roomNo]) {
            return;
        }

        visitInfo[roomNo] = true;

        const keys = rooms[roomNo];

        keys.forEach((keyNo) => {
            if (roomNo === keyNo) {
                return;
            }

            recursiveClosure(keyNo);
        });
    };

    recursiveClosure(0);

    return visitInfo.every(state => state);
};
