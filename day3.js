const fs = require('fs');
const { run } = require('./utils');

const values = fs.readFileSync('data/day3.txt', { encoding: 'utf-8' })
    .trim()
    .split('\n');

const yLimit = values.length;
const xLimit = values[0].length;

function calculateCollisions(xInc, yInc) {
    let collisions = 0;

    for (let x = 0, y = 0; y < yLimit; y += yInc) {
        const row = values[y];
        collisions += row[x % xLimit] === '#' ? 1 : 0;
        x += xInc;
    }
    return collisions;
}

function day3part1() {
    return calculateCollisions(3, 1);
}

function day3part2() {
    const paths = [
        [1, 1],
        [3, 1],
        [5, 1],
        [7, 1],
        [1, 2]
    ];

    return paths.reduce((acc, path) => acc * calculateCollisions(...path), 1);
}

run(day3part1);
run(day3part2);
