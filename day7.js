const { run, readFile } = require('./utils');

const values = readFile('data/day7.txt');

function process() {
    return values.map(line => {
        const [type, contents] = line.split(' bags contain ');
        return {
            type,
            contents: [...contents.matchAll(/(\d+) (\w+ \w+) bags?[.,] ?/g)].map(x => x.slice(1,3))
        }
    });
}

const byParent =  process().reduce((acc, rule) => {
        rule.contents.forEach(([count, color]) => {
            if (!acc[color]) {
                acc[color] = [];
            }
            acc[color].push(rule.type);
        })
        return acc;
    }, {});


const byChild = process().reduce((acc, rule) => {
    acc[rule.type] = rule.contents;
    return acc;
}, {});

function walk1(color) {
    return byParent[color]?.map(parent => {
        return [parent, walk1(parent)];
    }).flat(100).filter(Boolean);
}

function walk2(color) {
    return byChild[color].reduce((acc, [count, color]) => {
        return acc + count * walk2(color);
    }, 1);
}


function day7part1() {
    return new Set(walk1('shiny gold')).size;
}

function day7part2() {
    return walk2('shiny gold') - 1;
}

run(day7part1);
run(day7part2);
