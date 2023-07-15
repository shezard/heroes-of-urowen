import { decode } from '$lib/url.js';

export function load({ url }) {
    return {
        save: decode(url.searchParams.get('save'))
    };
}
