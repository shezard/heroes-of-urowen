<script>
	import App from "../components/App.svelte";
	import { name, race, kingdom, career, zaifas } from "../store";
</script>

<App />

<div class="w-full top-[-20px]">
    <img src="cs-top.jpg" />
    <img src="cs-bottom.jpg" />
</div>

<!-- <div class="absolute">
    <input
        type="text" bind:value={$name}
        class="top-[32px] left-[80px]"
    />
    <input
        type="text" bind:value={$race}
        class="top-[32px] left-[240px]"
    />
    <input
        type="text" bind:value={$kingdom}
        class="top-[50px] left-[80px]"
    />
    <input
        type="text" bind:value={$career}
        class="top-[50px] left-[240px]"
    />
    <input
        type="number" bind:value={$zaifas}
        class="top-[936px] left-[295px]"
    />
</div> -->

<style>
    input {
        position: absolute;
        width: 5rem;
        height: 15px;
        border: 1px solid #ccc;
    }

    input[type=number] {
        width: 3rem;
    }
</style>
