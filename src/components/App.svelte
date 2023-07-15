<script lang="ts">
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { encode } from '$lib/url';
    import { get } from 'svelte/store';
    import { store } from '../lib/store';
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
        <span on:click={save} role="button" tabindex="0">
            [Save]
        </span>
    </legend>

    <div class="grid grid-cols-2">
        <label class="flex p-1">
            Name
            <input type="text" bind:value={$store.name} />
        </label>

        <label class="flex p-1">
            Race
            <input type="text" bind:value={$store.race} />
        </label>

        <label class="flex p-1">
            Kingdom
            <input type="text" bind:value={$store.kingdom} />
        </label>

        <label class="flex p-1">
            Career
            <input type="text" bind:value={$store.career} />
        </label>
    </div>

    <div class="grid grid-cols-2">
        <div class="p-1">
            Stats
            <div>
                <label class="flex">
                    Strenght (STR)
                    <input type="number" bind:value={$store.baseSTR} />
                </label>
                <label class="flex">
                    Skill (SK)
                    <input type="number" bind:value={$store.baseSK} />
                </label>
                <label class="flex">
                    Magic (MAG)
                    <input type="number" bind:value={$store.baseMAG} />
                </label>
                <label class="flex">
                    Perception (PER)
                    <input type="number" bind:value={$store.basePER} />
                </label>
            </div>
        </div>
        <div class="p-1">test 2</div>
    </div>
</fieldset>

<style>
    * {
        font-family: 'BlackCastle';
    }

    input {
        border-bottom: 1px dashed black;
        width: 100%;
        text-indent: 2px;
        margin-left: 5px;
    }
</style>
