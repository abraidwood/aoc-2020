const fs = require('fs');
const { performance } = require('perf_hooks');

const parser = /^(\d+)-(\d+)\s+([a-z]):\s+([a-z]+)$/;

const values = fs.readFileSync('data/day2.txt', { encoding: 'utf-8' })
    .trim()
    .split('\n');

function day2part1() {
    const t1 = performance.now();

    const result = values.filter(str => {
        const [min, max, char, pass] = str.trim().match(parser).slice(1);
        const count = pass.split('').filter(x => x === char).length;
        return count >= min && count <= max;
    }).length;

    console.log('day2part1', result, `${(performance.now() - t1).toFixed(2)}ms`)
}

function day2part2() {
    const t1 = performance.now();

    const result = values.filter(str => {
        const [min, max, char, pass] = str.trim().match(parser).slice(1);
        return pass[min-1] === char ^ pass[max-1] === char;
    }).length;

    console.log('day2part2', result, `${(performance.now() - t1).toFixed(2)}ms`)
}

day2part1();
day2part2();
