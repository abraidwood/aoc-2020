const fs = require('fs');
const { performance } = require('perf_hooks');

module.exports = {
    run: fn => {
        const t1 = performance.now();
        const result = fn();
        console.log(fn.name, result, `${(performance.now() - t1).toFixed(2)}ms`)
    },

    readFile: path =>
        fs.readFileSync(path, { encoding: 'utf-8' }).trim().split('\n')
}