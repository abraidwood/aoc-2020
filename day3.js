const { run, readFile } = require('./utils');

const values = readFile('data/day3.txt');

const yLimit = values.length;
const xLimit = values[0].length;

function calculateCollisions(xInc, yInc) {
    let collisions = 0;

    for (let x = 0, y = 0; y < yLimit; x += xInc, y += yInc) {
        const row = values[y];
        collisions += row[x % xLimit] === '#' ? 1 : 0;
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
