function memoizedSum() {
    let map = {};
    return function (x, y) {
        if (!map[`${x},${y}`]) {
            console.log('from memoization');
            map[`${x},${y}`] = x + y;
            return x + y;
        } else {
            return x + y;
        }
    }
}
module.exports = memoizedSum;