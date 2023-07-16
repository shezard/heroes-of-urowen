<script lang="ts">
    import { bonus, store, type StatName } from '../lib/store';

    export let name: StatName;

</script>

<span class="flex">
    <span class="px-1">{name}: {$store[name] + $bonus[name]}</span>
</span>
