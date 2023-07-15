import { writable } from 'svelte/store';

const races = {
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

const careers = {
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

export const name = writable('');
export const race = writable<Race>();
export const kingdom = writable('');
export const career = writable('');

export const lp = writable(20);

export const zaifas = writable(15);

export type Save = {
    name: string;
    race: Race | null;
    kingdom: Kingdom | null;
    career: Career | null;
};

export const emptySave: Save = {
    name: '',
    race: null,
    kingdom: null,
    career: null
};

export const store = writable<Save>(emptySave);
