import { store } from '$lib/store.js';
import { decode } from '$lib/url.js';

export function load({ params }) {
    // const save = 'eyJuYW1lIjoiU2hlemFyZCIsInJhY2UiOiJlbGYiLCJraW5nZG9tIjoic25vdyIsImNhcmVlciI6InRoaWVmIn0='

    store.set(decode(params.save));

    return {};
}
