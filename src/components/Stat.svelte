<script lang="ts">
    import { dice } from '$lib/dice';
    import { bonus, store, type StatName } from '../lib/store';

    export let name: StatName;

    const rollStat = (name: StatName) => () => {
        const roll = dice`1d6` + $store[name] + $bonus[name];

        store.update((store) => {
            store.roll = {
                name: name,
                value: roll
            };

            return store;
        });

        return;
    };
</script>

<span class="flex">
    <span class="px-1">
        <span on:click={rollStat(name)} role="button" tabindex="0">
            {name}
        </span>
        : {$bonus[name]} +
    </span>
    <input class="w-10" type="number" bind:value={$store[name]} />
    <span>= {$store[name] + $bonus[name]}</span>
</span>
