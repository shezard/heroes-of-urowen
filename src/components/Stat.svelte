<script lang="ts">
    import { dice } from '$lib/dice';
    import { bonus, store, type StatName } from '../lib/store';

    export let name: StatName;

    export let cost: number;

    const rollStat = (name: StatName) => () => {
        const roll = dice`1d6` + $store[name] + $bonus[name];

        store.update((store) => {
            store.roll = {
                name: name,
                value: roll
            };

            return store;
        });
    };

    const increaseStat = (name: StatName) => () => {
        store.update((store) => {
            store.XP -= cost;
            store[name] += 1;

            return store;
        });
    };
</script>

<span class="flex">
    <span class="px-1">
        <span on:click={rollStat(name)} on:keypress={rollStat(name)} role="button" tabindex="0">
            [{name}]
        </span>
        : {$bonus[name]} +
    </span>
    <span>
        {$store[name]} = {$store[name] + $bonus[name]}
        {#if $store.XP >= cost}
            <span
                on:click={increaseStat(name)}
                on:keypress={increaseStat(name)}
                role="button"
                tabindex="0"
            >
                [+]
            </span>
        {/if}
    </span>
</span>
