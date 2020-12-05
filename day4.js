const { run, readFile } = require('./utils');

const values = readFile('data/day4.txt', { delimiter: '\n\n' })

function process() {
    return values.map(
        chunk => Object.fromEntries(
            chunk
                .split(/\s/)
                .map(
                    param => param.split(':')
                )
        )
    );
}

function day1part1() {
    return process().filter(
        row => (!row.cid && Object.keys(row).length >= 7 || Object.keys(row).length >= 8)
    ).length;
}

function day1part2() {
    const eclValues = 'amb blu brn gry grn hzl oth'.split(' ');

    return process()
        .map(({ byr, iyr, eyr, hgt, ...rest }) => ({
            byr: parseInt(byr, 10),
            iyr: parseInt(iyr, 10),
            eyr: parseInt(eyr, 10),
            hgt: hgt?.match(/(\d+)(in|cm)/)?.slice(1) || [],
            ...rest
        }))
        .filter(({ byr, iyr, eyr, hgt: [hgtVal, hgtType], hcl, ecl, pid }) => {
            return (
                byr >= 1920 && byr <= 2002 &&
                iyr >= 2010 && iyr <= 2020 &&
                eyr >= 2020 && eyr <= 2030 &&
                (
                    (hgtType === 'cm' && hgtVal >= 150 && hgtVal <= 193) ||
                    (hgtType === 'in' && hgtVal >= 59 && hgtVal <= 76)
                ) &&
                /^#[0-9a-f]{6}$/.test(hcl) &&
                eclValues.includes(ecl) &&
                /^[0-9]{9}$/.test(pid)
            )
        }).length;
}

run(day1part1);
run(day1part2);
