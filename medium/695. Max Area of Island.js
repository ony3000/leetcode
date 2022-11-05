/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const M = grid.length;
    const N = grid[0].length;

    const map = Array(M).fill(null).map(() => Array(N).fill(0));

    const VISITED = 'VISITED';
    const NOT_VISITED = 'NOT_VISITED';
    const NOT_AVAILABLE = 'NOT_AVAILABLE';

    const FIRST_ROW = 0;
    const LAST_ROW = M - 1;
    const FIRST_COL = 0;
    const LAST_COL = N - 1;

    for (let i = FIRST_ROW; i <= LAST_ROW; i += 1) {
        for (let j = FIRST_COL; j <= LAST_COL; j += 1) {
            map[i][j] = grid[i][j] === 1 ? NOT_VISITED : NOT_AVAILABLE;
        }
    }

    const recursion = (row, col) => {
        if (map[row][col] === VISITED || map[row][col] === NOT_AVAILABLE) {
            return 0;
        }

        map[row][col] = VISITED;

        let sumOfArea = 1;

        // UP
        if (row > FIRST_ROW && map[row - 1][col] === NOT_VISITED) {
            sumOfArea += recursion(row - 1, col);
        }

        // DOWN
        if (row < LAST_ROW && map[row + 1][col] === NOT_VISITED) {
            sumOfArea += recursion(row + 1, col);
        }

        // LEFT
        if (col > FIRST_COL && map[row][col - 1] === NOT_VISITED) {
            sumOfArea += recursion(row, col - 1);
        }

        // RIGHT
        if (col < LAST_COL && map[row][col + 1] === NOT_VISITED) {
            sumOfArea += recursion(row, col + 1);
        }

        return sumOfArea;
    };

    let result = 0;

    for (let i = 0; i < M; i += 1) {
        for (let j = 0; j < N; j += 1) {
            if (map[i][j] === NOT_VISITED) {
                const area = recursion(i, j);

                if (result < area) {
                    result = area;
                }
            }
        }
    }

    return result;
};
