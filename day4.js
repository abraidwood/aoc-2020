const { run, readFile } = require('./utils');

const values = readFile('data/day4.txt', { encoding: 'utf-8' });
values.push('');

const limit = values.length;

function process() {
    let details = '';
    const processed = [];

    for (let i = 0; i < limit; i += 1) {
        const line = values[i];

        if (line) {
            details += ` ${line}`;
            continue;
        }

        const parts = details.trim().split(' ').reduce((acc, part) => {
            const [key, value] = part.split(':');
            acc[key] = value;
            return acc;
        }, {});

        processed.push(parts);
        details = '';
    }

    return processed;
}

function day1part1() {
    return process().filter(
        row => (Object.keys(row).length >= 8 || (Object.keys(row).length === 7 && !row.cid))
    ).length;
}

const eclValues = 'amb blu brn gry grn hzl oth'.split(' ');

function day1part2() {
    return process()
        .map(({ byr, iyr, eyr, hgt, ...rest }) => ({
            byr: parseInt(byr, 10),
            iyr: parseInt(iyr, 10),
            eyr: parseInt(eyr, 10),
            hgt: hgt?.match(/(\d+)(in|cm)/) || [],
            ...rest
        }))
        .filter(({ byr, iyr, eyr, hgt, hcl, ecl, pid }) => {
            return (
                byr >= 1920 && byr <= 2002 &&
                iyr >= 2010 && iyr <= 2020 &&
                eyr >= 2020 && eyr <= 2030 &&
                (
                    (hgt[2] === 'cm' && parseInt(hgt[1]) >= 150 && parseInt(hgt[1]) <= 193) ||
                    (hgt[2] === 'in' && parseInt(hgt[1]) >= 59 && parseInt(hgt[1]) <= 76)
                ) &&
                /^#[0-9a-f]{6}$/.test(hcl) &&
                eclValues.includes(ecl) &&
                /^[0-9]{9}$/.test(pid)
            )
        }).length;
}

run(day1part1);
run(day1part2);
