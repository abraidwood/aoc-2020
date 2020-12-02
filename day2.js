const fs = require('fs');
const { run } = require('./utils');

const parser = /^(\d+)-(\d+)\s+([a-z]):\s+([a-z]+)$/;

const values = fs.readFileSync('data/day2.txt', { encoding: 'utf-8' })
    .trim()
    .split('\n');

function day2part1() {
    return values.filter(str => {
        const [min, max, char, pass] = str.trim().match(parser).slice(1);
        const count = pass.split('').filter(x => x === char).length;
        return count >= min && count <= max;
    }).length;
}

function day2part2() {
    return values.filter(str => {
        const [min, max, char, pass] = str.trim().match(parser).slice(1);
        return pass[min-1] === char ^ pass[max-1] === char;
    }).length;
}

run(day2part1);
run(day2part2);
