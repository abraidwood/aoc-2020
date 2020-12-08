const { run, readFile } = require('./utils');

const lines = readFile('data/day8.txt');

function process(data) {
    return data.map(line => {
        const [, op, step] = line.match(/^(\w{3}) ([-+]\d+)$/);
        return {
            op,
            step: parseInt(step, 10)
        };
    }).concat({
        op: 'end'
    });
}


function runProgram(mem) {
    const tags = new Array(mem.length).fill(0);
    let ptr = 0;
    let acc = 0;

    while (ptr < mem.length) {
        const { op, step } = mem[ptr];
        tags[ptr] += 1;

        if (tags[ptr] === 2) {
            return { type: 'LOOP', acc };
        }

        switch(op) {
            case 'nop':
                ptr += 1;
                continue;

            case 'acc':
                acc += step;
                ptr += 1;
                break;

            case 'jmp':
                ptr += step;
                break;

            case 'end':
                return { type: 'END', acc };
        }
    }
}

function day8part1() {
    const mem = process(lines);
    return runProgram(mem).acc;
}

function day8part2() {
    const mem = process(lines);
    let swapPtr = 0;

    while (swapPtr < mem.length - 1) {
        const { op, step } = mem[swapPtr];

        if (op === 'acc') {
            swapPtr += 1;
            continue;
        }

        const corrected = [...mem];
        corrected[swapPtr] = {
            op: op === 'nop' ? 'jmp' : 'nop',
            step,
            correction: true
        };

        const { type, acc } = runProgram(corrected);

        if (type === 'END') {
            return acc;
        }

        swapPtr += 1;
    }
}

run(day8part1);
run(day8part2);
