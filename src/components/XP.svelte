<script lang="ts">
    import { store } from '../lib/store';

    const addXP = function () {
        store.update((store) => {
            store.XP += 1;
            store.totalXP += 1;
            return store;
        });
    };

    const removeXP = function () {
        store.update((store) => {
            store.XP -= 1;
            store.totalXP -= 1;
            return store;
        });
    };
</script>

<span class="flex">
    <span class="px-1">
        XP : {$store.XP}
        <span on:click={addXP} on:keypress={addXP} role="button" tabindex="0"> [ + ] </span>
        <span class="px-1" />
        <span on:click={removeXP} on:keypress={removeXP} role="button" tabindex="0"> [ - ] </span>
    </span>
</span>
