/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }

    const FIRST_INDEX = 0;
    const LAST_INDEX = target.length - 1;

    const LEFT = 'LEFT';
    const NONE = 'NONE';
    const RIGHT = 'RIGHT';

    const recursion = (node, remainTarget, direction = NONE) => {
        const leftEndIndex = Math.max(FIRST_INDEX, node.val - stamp.length);
        const rightEndIndex = Math.min(LAST_INDEX - (stamp.length - 1), node.val + stamp.length);

        if (direction !== RIGHT) {
            for (let index = leftEndIndex; index < node.val; index += 1) {
                const subStamp = stamp.slice(0, node.val - index);
                const subTarget = remainTarget.slice(index, index + stamp.length);

                const position = subTarget.indexOf(subStamp);

                if (position !== -1) {
                    const child = new TreeNode(index);
                    const remainder = [
                        remainTarget.slice(0, index),
                        '.'.repeat(stamp.length),
                        remainTarget.slice(index + stamp.length),
                    ].join('');

                    node.left = child;
                    remainTarget = remainder;
                    remainTarget = recursion(child, remainder, LEFT);
                    break;
                }
            }
        }

        if (direction !== LEFT) {
            for (let index = rightEndIndex; index > node.val; index -= 1) {
                const subStamp = stamp.slice(node.val - index);
                const subTarget = remainTarget.slice(index, index + stamp.length);

                const position = subTarget.indexOf(subStamp);

                if (position !== -1) {
                    const child = new TreeNode(index);
                    const remainder = [
                        remainTarget.slice(0, index),
                        '.'.repeat(stamp.length),
                        remainTarget.slice(index + stamp.length),
                    ].join('');

                    node.right = child;
                    remainTarget = remainder;
                    remainTarget = recursion(child, remainder, RIGHT);
                    break;
                }
            }
        }

        return remainTarget;
    };

    const rootNodes = [];
    let remainder = target;
    let breakCounter = 0;

    do {
        const position = remainder.indexOf(stamp);

        if (position === -1) {
            break;
        }

        const root = new TreeNode(position);
        remainder = [
            remainder.slice(0, position),
            '.'.repeat(stamp.length),
            remainder.slice(position + stamp.length),
        ].join('');

        rootNodes.push(root);

        const recursionResult = recursion(root, remainder);

        if (remainder === recursionResult) {
            breakCounter += 1;

            if (breakCounter > target.length) {
                break;
            }
        }

        remainder = recursionResult;
    } while (true);

    const stampPositions = [];
    const convertTreeToArray = (node) => {
        stampPositions.push(node.val);

        if (node.left) {
            convertTreeToArray(node.left);
        }

        if (node.right) {
            convertTreeToArray(node.right);
        }
    };
    rootNodes.forEach((root) => {
        convertTreeToArray(root);
    });
    stampPositions.reverse();

    let temp = '_'.repeat(target.length);
    stampPositions.forEach((startIndex) => {
        temp = [
            temp.slice(0, startIndex),
            stamp,
            temp.slice(startIndex + stamp.length),
        ].join('');
    });

    if (temp === target) {
        return (stampPositions.length <= 10 * target.length ? stampPositions : []);
    }
    else {
        [...remainder.matchAll(/[a-z]+/g)].forEach((matches) => {
            const leftEndIndex = Math.max(FIRST_INDEX, matches.index - stamp.length + 1);

            for (let index = leftEndIndex; index <= matches.index; index += 1) {
                const pattern = new RegExp(remainder.slice(index, index + stamp.length));

                if (pattern.test(stamp)) {
                    stampPositions.unshift(index);
                    break;
                }
            }
        });

        temp = '_'.repeat(target.length);
        stampPositions.forEach((startIndex) => {
            temp = [
                temp.slice(0, startIndex),
                stamp,
                temp.slice(startIndex + stamp.length),
            ].join('');
        });

        return (temp === target && stampPositions.length <= 10 * target.length ? stampPositions : []);
    }
};
