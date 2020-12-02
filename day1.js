const fs = require('fs');
const { performance } = require('perf_hooks');

const values = fs.readFileSync('data/day1.txt', { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .map(n => parseInt(n, 10));

const limit = values.length;

function day1part1() {
    const t1 = performance.now();
    for (let j = 0; j < limit; j += 1) {
        for (let i = j + 1; i < limit; i += 1) {
            if (values[j] + values[i] === 2020) {
                console.log('day1part1', values[j] * values[i], `${(performance.now() - t1).toFixed(2)}ms`);
                return;
            }
        }
    }
}

function day1part2() {
    const t1 = performance.now();
    for (let k = 0; k < limit; k += 1) {
        for (let j = k; j < limit; j += 1) {
            for (let i = j + 1; i < limit; i += 1) {
                if (values[k] + values[j] + values[i] === 2020) {
                    console.log('day1part2', values[k] * values[j] * values[i], `${(performance.now() - t1).toFixed(2)}ms`);
                    return;
                }
            }
        }
    }
}

day1part1();
day1part2();
