import { writable } from 'svelte/store';

const races = {
    elf: {
        sylvan: 'MAG',
        snow: 'SK'
    },
    dwarf: {
        Gyrcaukas: 'STR',
        Ternostan: 'STR'
    },
    human: {
        Flitzgar: 'SK',
        Verinfes: 'STR',
        Berwalf: 'SK'
    }
};

type Race = keyof typeof races;

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

export const name = writable('');
export const race = writable<Race>();
export const kingdom = writable('');
export const career = writable('');

export const lp = writable(20);

export const zaifas = writable(15);
