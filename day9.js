const { run, readFile } = require('./utils');

const values = readFile('data/day9.txt').map(v => parseInt(v, 10));

function day6part1() {
    const preambleLength = 25;
    const preambleList = values.slice(0, preambleLength);
    const preambleSet = new Set(preambleList);

    for (let i = preambleLength; i < values.length; i += 1) {
        const value = values[i];

        if (!preambleList.some(
            item => item !== value && preambleSet.has(value - item)
        )) {
            return value;
        }

        if (preambleList.length === preambleLength) {
            preambleSet.delete(preambleList.shift());
        }
        preambleList.push(value);
        preambleSet.add(value);
    }
}

function day6part2() {
    const result = 36845998;
    let start = 0;
    let end = 1;

    while (true) {
        const list = values.slice(start, end);
        const sum = list.reduce((a, v) => a + v, 0);

        if (sum < result) {
            end += 1;
        } else if (sum > result) {
            start += 1;
        } else {
            list.sort((a, b) => a - b);
            return list[0] + list[list.length - 1];
        }
    }
}

run(day6part1);
run(day6part2);
