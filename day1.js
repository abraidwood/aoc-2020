const { run, readFile } = require('./utils');

const values = readFile('data/day1.txt').map(n => parseInt(n, 10));

const limit = values.length;
const valueSet = new Set(values.map(v => 2020 - v));

function day1part1() {
    for (let i = 0; i < limit; i += 1) {
        if (valueSet.has(values[i])) {
            return (2020 - values[i]) * values[i];
        }
    }
}

function day1part2() {
    for (let j = 0; j < limit; j += 1) {
        for (let i = j; i < limit; i += 1) {
            if (valueSet.has(values[j] + values[i])) {
                return (2020 - values[j] - values[i]) * values[j] * values[i];
            }
        }
    }
}

run(day1part1);
run(day1part2);
