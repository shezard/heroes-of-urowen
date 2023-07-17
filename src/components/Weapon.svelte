<script lang="ts">
    import { dice } from '$lib/dice';
    import { store } from '$lib/store';

    const rollAttack = () => {
        store.update((store) => {
            store.roll = {
                name: 'Player attack roll',
                value: dice`1d6` + store[store.weapon.stat]
            };
            return store;
        });
    };

    const rollDamage = () => {
        store.update((store) => {
            store.roll = {
                name: 'Player damage roll',
                value: dice`${store.weapon.dice}`
            };
            return store;
        });
    };

    let edit = false;

    const toggleEdit = () => {
        edit = !edit;
    }

</script>

{#if edit}
    <span>
        <input type="text" bind:value={$store.weapon.name} />
        <input type="text" bind:value={$store.weapon.stat} />
        <input type="text" bind:value={$store.weapon.dice} />
        <span on:click={toggleEdit} on:keypress={toggleEdit} role="button" tabindex="0">
            [Save]
        </span>
    </span>
{:else}
    <span>
        {$store.weapon.name}
        <span on:click={rollAttack} on:keypress={rollAttack} role="button" tabindex="0">
            [{$store.weapon.stat}]
        </span>
        <span on:click={rollDamage} on:keypress={rollDamage} role="button" tabindex="0">
            [{$store.weapon.dice}]
        </span>
        <span on:click={toggleEdit} on:keypress={toggleEdit} role="button" tabindex="0">
            [Edit]
        </span>
    </span>
{/if}

<style>
    input {
        text-indent: 2px;
        margin-left: 5px;
        border-bottom: 1px dashed black;
        text-transform: capitalize;
    }
</style>
