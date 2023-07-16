export const dice = function (strings: TemplateStringsArray, dice = ''): number {
    console.log(strings, dice);

    if (!strings.raw[0] && dice === '') {
        throw new Error('Empty dice');
    }

    let raw = strings.raw[0];

    if (dice !== '') {
        raw = dice;
    }

    const matches = raw.match(/(\d+)+d(\d*)([+|-]\d*)?/);

    if (!matches) {
        throw new Error(`Invalid match for ${raw}`);
    }

    const multiple = Number(matches[1]);
    const faces = 1 + ~~(Math.random() * Number(matches[2]));
    const bonus = matches[3] ? Number(matches[3]) : 0;

    return multiple * faces + bonus;
};
