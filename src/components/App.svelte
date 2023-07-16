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

    const save = () => {
        const save = encode(get(store));
        goto(`${base}?save=${save}`);
    };

    $: store.set($page.data.save);
</script>

<fieldset class="m-1 border-4 border-black border-double">
    <legend class="text-3xl ml-5 px-2">
        Heroes of Urowen
        <span on:click={save} role="button" tabindex="0"> [Save] </span>
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
            Last roll: {$store.roll.name} {$store.roll.value}
        </div>
    {/if}

    <hr class="border-black m-2" />

    <div class="grid grid-cols-2 p-1">
        <Stat name="STR" />
        <Stat name="SK" />
        <Stat name="MAG" />
        <Stat name="PER" />
    </div>

    <hr class="border-black m-2" />

    <div class="grid grid-cols-2 p-1">
        <StatInfo name="LP" />
        <StatInfo name="PP" />
        <XP />
        <StatInfo name="Z" />
    </div>

    <hr class="border-black m-2" />
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
