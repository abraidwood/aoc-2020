const { run, readFile } = require('./utils');

const values = readFile('data/day9.txt').map(v => parseInt(v, 10));

let part1Result;

function day6part1() {
    const preambleLength = 25;
    const preambleList = values.slice(0, preambleLength);
    const preambleSet = new Set(preambleList);

    for (let i = preambleLength; i < values.length; i += 1) {
        const value = values[i];

        if (!preambleList.some(
            item => item !== value && preambleSet.has(value - item)
        )) {
            part1Result = value;
            return value;
        }

        preambleSet.delete(preambleList.shift());
        preambleList.push(value);
        preambleSet.add(value);
    }
}

function day6part2() {
    let start = 0;
    let end = 0;
    let sum = values[start];

    while (start < values.length && end < values.length) {
        if (sum < part1Result) {
            end += 1;
            sum += values[end];
        } else if (sum > part1Result) {
            sum -= values[start];
            start += 1;
        } else {
            const list = values.slice(start, end + 1).sort();
            return list[0] + list[list.length - 1];
        }
    }
}

run(day6part1);
run(day6part2);
