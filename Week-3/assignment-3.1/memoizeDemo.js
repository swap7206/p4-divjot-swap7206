
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        console.log(cache);
        const cacheKey = args.toString();
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey)
        } else {
            let result = args.reduce((accumalator, currentValue) => fn(accumalator, currentValue));
            cache.set(cacheKey, result);
            return cache.get(cacheKey);
        }
    };
}

const add = (accumalator, currentValue) => (accumalator + currentValue);

function time(fn) {
    console.time("execution time");
    console.log(fn());
    console.timeEnd("execution time");
}

const addM = memoize(add);

time(() => addM(10));
time(() => addM(10, 15, 20, 30));
time(() => addM(10, 15, 20, 30));
time(() => addM(20, 30));
time(() => addM(20, 30));
