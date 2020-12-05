const { run, readFile } = require('./utils');

const parser = /^(\d+)-(\d+)\s+([a-z]):\s+([a-z]+)$/;

const values = readFile('data/day2.txt');

function day2part1() {
    return values.filter(str => {
        const [, min, max, char, pass] = str.match(parser);
        const count = pass.split('').filter(x => x === char).length;
        return count >= min && count <= max;
    }).length;
}

function day2part2() {
    return values.filter(str => {
        const [, min, max, char, pass] = str.match(parser);
        return pass[min-1] === char ^ pass[max-1] === char;
    }).length;
}

run(day2part1);
run(day2part2);
