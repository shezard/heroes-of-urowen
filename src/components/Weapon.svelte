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
</script>

<span>
    {$store.weapon.name}
    <span on:click={rollAttack} on:keypress={rollAttack} role="button" tabindex="0">
        [{$store.weapon.stat}]
    </span>
    <span on:click={rollDamage} on:keypress={rollDamage} role="button" tabindex="0">
        [{$store.weapon.dice}]
    </span>
</span>
