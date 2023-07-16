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
    import Z from './Z.svelte';

    const save = () => {
        const save = encode(get(store));
        goto(`${base}?save=${save}`);
    };

    $: store.set($page.data.save);
</script>

<fieldset class="m-1 border-4 border-black border-double">
    <legend class="text-3xl ml-5 px-2">
        Heroes of Urowen
        <span on:click={save} on:keypress={save} role="button" tabindex="0"> [Save] </span>
    </legend>

    <div class="grid grid-cols-2">
        <label class="flex p-1">
            Name
            <input type="text" bind:value={$store.name} />
        </label>

        <label class="flex p-1">
            Race
            <select bind:value={$store.race}>
                {#each Object.keys(races) as race}
                    <option value={race}>{race}</option>
                {/each}
            </select>
        </label>

        <label class="flex p-1">
            Kingdom
            <select bind:value={$store.kingdom}>
                {#each Object.keys(races[$store.race]) as kingdom}
                    <option value={kingdom}>{kingdom}</option>
                {/each}
            </select>
        </label>

        <label class="flex p-1">
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
            {$store.roll.value}
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
        <Z />
    </div>

    <hr class="border-black m-2" />

    <div class="p-1">
        Weapon : <Weapon />
    </div>

    <hr class="border-black m-2" />

    <div class="p-1">
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

    <div class="p-1">
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

    <div class="p-1">
        Food
        <input type="text" bind:value={$store.food} />
    </div>
</fieldset>

<style>
    * {
        font-family: 'BlackCastle';
    }

    input:not(.w-10),
    select {
        width: 100%;
        text-indent: 2px;
        margin-left: 5px;
        border-bottom: 1px dashed black;
        text-transform: capitalize;
    }
</style>
