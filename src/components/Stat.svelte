<script lang="ts">
    import { bonus, store, type StatName } from '../lib/store';

    export let name: StatName;
</script>

<span class="flex">
    <span class="px-1">
        <span>{name}</span> : {$bonus[name]} +
    </span>
    <input class="w-10" type="number" bind:value={$store[name]} />
    <span>= {$store[name] + $bonus[name]}</span>
</span>
