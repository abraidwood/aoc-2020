const { performance } = require('perf_hooks');

module.exports = {
    run: fn => {
        const t1 = performance.now();
        const result = fn();
        console.log(fn.name, result, `${(performance.now() - t1).toFixed(2)}ms`)
    }
}