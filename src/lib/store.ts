import { derived, writable } from 'svelte/store';

export type StatName = 'STR' | 'SK' | 'MAG' | 'PER' | 'LP' | 'PP' | 'XP' | 'Z';

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
        PP: 3,
        special: 'reroll 1 as 3'
    },
    hunter: {
        attribute: 'PER',
        PP: 0,
        special: 'bow'
    },
    warrior: {
        attribute: 'STR',
        PP: 0,
        special: 'roll 6, + 2 damage'
    },
    thief: {
        attribute: 'SK',
        PP: 0,
        special: '+1 item slot'
    },
    minstrel: {
        attribute: 'SK',
        PP: 0,
        special: 'dodge attack'
    },
    'sagrast knight monk': {
        attribute: 'MAG',
        PP: 1,
        special: 'heal'
    },
    alchemist: {
        attribute: 'MAG',
        PP: 2,
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
    STR: number;
    SK: number;
    MAG: number;
    PER: number;
    LP: number;
    PP: number;
    XP: number;
    Z: number;
    roll: Roll | null;
};

interface Roll {
    name: string;
    value: number;
}

export const emptySave: Save = {
    name: '',
    race: 'elf',
    kingdom: 'snow',
    career: 'warrior',
    STR: 0,
    SK: 0,
    MAG: 0,
    PER: 0,
    LP: 20,
    PP: 0,
    XP: 0,
    Z: 15,
    roll: null
};

export const store = writable<Save>(emptySave);

export const bonus = derived(store, function (store: Save): Record<StatName, number> {
    const bonus = {
        STR: 0,
        SK: 0,
        MAG: 0,
        PER: 0,
        LP: 0,
        PP: 0,
        XP: 0,
        Z: 0
    };

    const kingdom = races[store.race][store.kingdom];
    const career = careers[store.career];

    bonus[kingdom] += 1;

    if (bonus[career.attribute] == 0) {
        bonus[career.attribute] += 1;
    } else {
        bonus.PER += 1;
    }

    bonus.PP += career.PP;

    return bonus;
});
