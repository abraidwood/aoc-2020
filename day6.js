const { run, readFile } = require('./utils');

const values = readFile('data/day6.txt', { delimiter: '\n\n' });

function day6part1() {
    return values.map(str =>
        str.split('').reduce((acc, char) => {
            if (char !== '\n') {
                acc.add(char);
            }
            return acc;
        }, new Set()).size
    ).reduce((acc, v) => acc + v, 0);
}

function day6part2() {
    return values.map(str => {
        const rows = str.split('\n');
        return 'abcdefghijklmnopqrstuvwxyz'
            .split('')
            .filter(char => rows.every(row => !row || row.includes(char)))
            .length;
     }).reduce((acc, v) => acc + v, 0);
}

run(day6part1);
run(day6part2);
