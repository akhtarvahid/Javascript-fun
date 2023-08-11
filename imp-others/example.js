var memoizedSum = require('./memoize-value');

let memoize = memoizedSum();
console.log(memoize(3, 7));  //from memoization: 10
console.log('-----------------')
console.log(memoize(3, 7));  //10