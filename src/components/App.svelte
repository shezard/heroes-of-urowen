<script lang="ts">
    import { name, race, kingdom, career, zaifas } from "../store";
</script>

<fieldset class="m-1 border-4 border-black border-double">
    <legend class="text-3xl ml-5 px-2">
        Heroes of Urowen
    </legend>

    <div class="grid grid-cols-2">
        <label class="flex p-1">
            Name
            <input type="text" bind:value={$name} />
        </label>

        <label class="flex p-1">
            Race
            <input type="text" bind:value={$race} />
        </label>


        <label class="flex p-1">
            Kingdom
            <input type="text" bind:value={$kingdom} />
        </label>

        <label class="flex p-1">
            Career
            <input type="text" bind:value={$career} />
        </label>
    </div>

    <div class="grid grid-cols-2">
        <div class="p-1">
            Stats
            <div>
                <label class="flex">
                    Strenght (STR)
                    <input type="number" />
                </label>
                <label class="flex">
                    Skill (SK)
                    <input type="number" />
                </label>
                <label class="flex">
                    Magic (MAG)
                    <input type="number" />
                </label>
                <label class="flex">
                    Perception (PER)
                    <input type="number" />
                </label>
            </div>
        </div>
        <div class="p-1">
            test 2
        </div>
    </div>

</fieldset>

<style>
    * {
        font-family: 'BlackCastle'
    }

    input {
        border-bottom: 1px dashed black;
        width: 100%;
        text-indent: 2px;
        margin-left: 5px;
    }
</style>
