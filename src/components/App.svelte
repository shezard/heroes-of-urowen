<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { encode } from '$lib/url';
    import { get } from 'svelte/store';
    import { careers, bonus, races, store } from '../lib/store';
    import { page } from '$app/stores';

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

    <hr class="border-black m-1" />

    <div class="grid grid-cols-2 p-1">
        <span class="flex">
            <span class="px-1">
                STR : {$bonus.STR} +
            </span>
            <input class="w-10" type="number" bind:value={$store.baseSTR} />
            <span>= {$store.baseSTR + $bonus.STR}</span>
        </span>
        <span class="flex">
            <span class="px-1">
                SK : {$bonus.SK} +
            </span>
            <input class="w-10" type="number" bind:value={$store.baseSK} />
            <span>= {$store.baseSK + $bonus.SK}</span>
        </span>
        <span class="flex">
            <span class="px-1">
                MAG : {$bonus.MAG} +
            </span>
            <input class="w-10" type="number" bind:value={$store.baseMAG} />
            <span>= {$store.baseMAG + $bonus.MAG}</span>
        </span>
        <span class="flex">
            <span class="px-1">
                PER : {$bonus.PER} +
            </span>
            <input class="w-10" type="number" bind:value={$store.basePER} />
            <span>= {$store.basePER + $bonus.PER}</span>
        </span>
    </div>

    <hr class="border-black m-1" />
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
