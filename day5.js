const { run, readFile } = require('./utils');

const values = readFile('data/day5.txt');

const parse = str => parseInt(
    str.replace(/[BR]/g, '1').replace(/[FL]/g, '0'),
    2
);

const processed = values.map(str => {
    const row = parse(str.slice(0, 7));
    const col = parse(str.slice(7));
    return row * 8 + col;
});

function day1part1() {
    let max = 0;
    processed.forEach(val => {
        max = Math.max(max, val);
    });
    return max;
}

function day1part2() {
    const ids = processed.sort((a, b) => a - b);

    for (let i = 0; i < ids.length; i += 1) {
        if (ids[i] + 1 !== ids[i + 1]) {
            return ids[i] + 1;
        }
    }
}

run(day1part1);
run(day1part2);
