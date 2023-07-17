<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { encode } from '$lib/url';
    import { get } from 'svelte/store';
    import { careers, races, store } from '../lib/store';
    import { page } from '$app/stores';
    import Stat from './Stat.svelte';
    import XP from './XP.svelte';
    import StatInfo from './StatInfo.svelte';
    import Weapon from './Weapon.svelte';
    import { dice } from '$lib/dice';

    const save = () => {
        const save = encode(get(store));
        goto(`${base}?save=${save}`);
    };

    const rollDice = () => {
        store.update((store) => {
            store.roll = {
                name: 'Roll a d6',
                value: dice`1d6`
            };

            return store;
        });
    };

    const hitLocation = () => {
        store.update((store) => {
            const roll = dice`1d6`;

            const locations: Record<number, string> = {
                1: 'Legs (-1)',
                2: 'Trunk (0)',
                3: 'Trunk (0)',
                4: 'Trunk (0)',
                5: 'Arms (+1)',
                6: 'Head (+3)'
            };

            store.roll = {
                name: `Hit ${locations[roll]}`,
                value: roll
            };

            return store;
        });
    };

    $: store.set($page.data.save);
</script>

<fieldset class="m-1 border-4 border-black border-double">
    <legend class="text-3xl ml-5 px-2">
        Heroes of Urowen
        <span on:click={save} on:keypress={save} role="button" tabindex="0"> [Save] </span>
    </legend>

    <div class="grid grid-cols-2">
        <label class="flex p-1 px-2">
            Name
            <input type="text" bind:value={$store.name} />
        </label>

        <label class="flex p-1 px-2">
            Race
            <select bind:value={$store.race}>
                {#each Object.keys(races) as race}
                    <option value={race}>{race}</option>
                {/each}
            </select>
        </label>

        <label class="flex p-1 px-2">
            Kingdom
            <select bind:value={$store.kingdom}>
                {#each Object.keys(races[$store.race]) as kingdom}
                    <option value={kingdom}>{kingdom}</option>
                {/each}
            </select>
        </label>

        <label class="flex p-1 px-2">
            Career
            <select bind:value={$store.career}>
                {#each Object.keys(careers) as career}
                    <option value={career}>{career}</option>
                {/each}
            </select>
        </label>
    </div>

    {#if $store.roll}
        <hr class="border-black m-2" />

        <div class="p-1">
            Last roll: {$store.roll.name}
            | {$store.roll.value} |
        </div>
    {/if}

    <hr class="border-black m-2" />

    <div class="grid grid-cols-2 p-1">
        <Stat name="STR" cost={8} />
        <Stat name="SK" cost={8} />
        <Stat name="MAG" cost={8} />
        <Stat name="PER" cost={2} />
    </div>

    <hr class="border-black m-2" />

    <div class="grid grid-cols-2 p-1">
        <StatInfo name="LP" />
        <StatInfo name="PP" />
        <XP />

        <span class="flex">
            <span class="px-1">
                Z :
                <input class="w-10" type="number" bind:value={$store.Z} />
            </span>
        </span>
    </div>

    <hr class="border-black m-2" />

    <div class="grid grid-cols-2 p-1 px-2">
        <div>
            Base Camp :
            <input class="w-10" type="number" bind:value={$store.baseCamp} />
        </div>
        <div on:click={rollDice} on:keypress={rollDice} role="button" tabindex="0">[Roll Dice]</div>
    </div>

    <hr class="border-black m-2" />

    <div class="p-1 px-2">
        <div on:click={hitLocation} on:keypress={hitLocation} role="button" tabindex="0">
            [Hit location]
        </div>
    </div>

    <div class="p-1 px-2">
        Weapon : <Weapon />
    </div>

    <hr class="border-black m-2" />

    <div class="p-1 px-2">
        <div class="flex">
            Helmet <input type="number" />
        </div>
        <div class="flex">
            Chest <input type="number" />
        </div>
        <div class="flex">
            Arms <input type="number" />
        </div>
        <div class="flex">
            Greaves <input type="number" />
        </div>
    </div>

    <hr class="border-black m-2" />

    <div class="p-1 px-2">
        Bag slots
        <input type="text" bind:value={$store.bags[0]} />
        <input type="text" bind:value={$store.bags[1]} />
        <input type="text" bind:value={$store.bags[2]} />
        <input type="text" bind:value={$store.bags[3]} />
        <input type="text" bind:value={$store.bags[4]} />
        <input type="text" bind:value={$store.bags[5]} />
        {#if $store.career === 'thief'}
            <input type="text" bind:value={$store.bags[6]} />
        {/if}
    </div>

    <hr class="border-black m-2" />

    <div class="p-1 px-2">
        Food
        <textarea bind:value={$store.food} />
    </div>

    <div class="p-1 px-2">
        Special
        <textarea bind:value={$store.special} />
    </div>
</fieldset>

<style>
    * {
        font-family: 'BlackCastle';
    }

    input:not(.w-10),
    select,
    textarea {
        width: 100%;
        text-indent: 2px;
        margin-left: 5px;
        border-bottom: 1px dashed black;
        text-transform: capitalize;
    }
</style>
