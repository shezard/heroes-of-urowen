import { emptySave, type Save } from './store';

export const encode = function (save: Save): string {
    if (typeof window === 'undefined') {
        return '';
    }

    return window.btoa(JSON.stringify(save));
};

export const decode = function (url: string | null): Save {
    if (typeof window === 'undefined' || url == null) {
        return {
            name: '',
            race: null,
            kingdom: null,
            career: null
        };
    }

    let save: Save;
    try {
        save = JSON.parse(window.atob(url));
    } catch (err) {
        save = emptySave;
    }

    return save;
};
