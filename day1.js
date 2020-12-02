const fs = require('fs');
const { run } = require('./utils');

const values = fs.readFileSync('data/day1.txt', { encoding: 'utf-8' })
    .trim()
    .split('\n')
    .map(n => parseInt(n, 10));

const limit = values.length;

function day1part1() {
    for (let j = 0; j < limit; j += 1) {
        for (let i = j + 1; i < limit; i += 1) {
            if (values[j] + values[i] === 2020) {
                return values[j] * values[i];
            }
        }
    }
}

function day1part2() {
    for (let k = 0; k < limit; k += 1) {
        for (let j = k; j < limit; j += 1) {
            for (let i = j + 1; i < limit; i += 1) {
                if (values[k] + values[j] + values[i] === 2020) {
                    return values[k] * values[j] * values[i];
                }
            }
        }
    }
}

run(day1part1);
run(day1part2);
