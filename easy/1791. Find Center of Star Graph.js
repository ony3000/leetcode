/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const nodeValues = {};

    for (const [u, v] of edges) {
        if (nodeValues[u]) {
            return u;
        }

        nodeValues[u] = true;

        if (nodeValues[v]) {
            return v;
        }

        nodeValues[v] = true;
    }
};
