/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const LAST_NODE = graph.length - 1;

    const recursion = (label) => {
        const visitableNodes = graph[label];

        if (visitableNodes.length === 0) {
            return [[label]];
        }

        const result = [];

        visitableNodes.forEach((nodeLabel) => {
            result.push(...recursion(nodeLabel));
        });

        result.forEach((path) => {
            path.unshift(label);
        });

        return result;
    };

    const allPaths = recursion(0);

    const result = allPaths.filter((path) => path.includes(LAST_NODE)).map((path) => {
        const index = path.findIndex((label) => (label === LAST_NODE));

        return path.slice(0, index + 1);
    });

    return result;
};
