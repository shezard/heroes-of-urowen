import { derived, writable } from 'svelte/store';

type StatName = 'STR' | 'SK' | 'MAG' | 'PER';

export const races = {
    elf: {
        sylvan: 'MAG',
        snow: 'SK'
    },
    dwarf: {
        gyrcaukas: 'STR',
        ternostan: 'STR'
    },
    human: {
        flitzgar: 'SK',
        verinfes: 'STR',
        berwalf: 'SK'
    }
};

type Race = keyof typeof races;

type Kingdom =
    | keyof (typeof races)['elf']
    | keyof (typeof races)['dwarf']
    | keyof (typeof races)['human'];

export const careers = {
    sorcerer: {
        attribute: 'MAG',
        special: 'reroll 1 as 3'
    },
    hunter: {
        attribute: 'PER',
        special: 'bow'
    },
    warrior: {
        attribute: 'STR',
        special: 'roll 6, + 2 damage'
    },
    thief: {
        attribute: 'SK',
        special: '+1 item slot'
    },
    minstrel: {
        attribute: 'SK',
        special: 'dodge attack'
    },
    'sagrast knight monk': {
        attribute: 'MAG',
        special: 'heal'
    },
    alchemist: {
        attribute: 'MAG',
        special: 'better potion'
    }
};

type Career = keyof typeof careers;

export const lp = writable(20);

export const zaifas = writable(15);

export type Save = {
    name: string;
    race: Race;
    kingdom: Kingdom;
    career: Career;
    baseSTR: number;
    baseSK: number;
    baseMAG: number;
    basePER: number;
};

export const emptySave: Save = {
    name: '',
    race: 'elf',
    kingdom: 'snow',
    career: 'warrior',
    baseSTR: 0,
    baseSK: 0,
    baseMAG: 0,
    basePER: 0
};

export const store = writable<Save>(emptySave);

export const bonus = derived(store, function (store: Save): Record<StatName, number> {
    const bonus = {
        STR: 0,
        SK: 0,
        MAG: 0,
        PER: 0
    };

    const kingdom = races[store.race][store.kingdom];
    const career = careers[store.career];

    bonus[kingdom] += 1;

    if (bonus[career.attribute] == 0) {
        bonus[career.attribute] += 1;
    } else {
        bonus.PER += 1;
    }

    return bonus;
});
