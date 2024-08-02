<script lang="ts">
    import { CaretDown, X } from "phosphor-svelte";
    import { Material, Materials, MaterialSlot } from "../lib/materials";
    import editorStore from "../lib/editorStore";

    export let slot: MaterialSlot;

    const AllMaterials = [
        Material.Red,
        Material.Orange,
        Material.Yellow,
        Material.Lime,
        Material.Green,
        Material.Cyan,
        Material.Blue,
        Material.Purple,
        Material.Pink,
        Material.White,
        Material.Grey,
        Material.Black,
        Material.Brown,
        Material.Gold,
        Material.Pale,
        Material.Bronze,
        Material.Rose,
        Material.Silver,
        Material.Emerald,
        Material.VexBlue,
        Material.DaitoMagenta,
        Material.RoseGold,
        Material.WornBlue,
    ];

    let material = Material.None;

    function onChange() {
        editorStore.update((editor) => {
            editor.material[slot] = material;
            return editor;
        });
    }

    editorStore.subscribe((editor) => {
        material = editor.material[slot];
    });
</script>

<div class="flex w-full flex-row items-center justify-start gap-2">
    <div class="relative flex-grow">
        <select
            class="h-9 w-full appearance-none rounded-md border-0 bg-neutral-700 px-4 text-sm text-neutral-200 hover:bg-neutral-600 focus:outline-px"
            bind:value={material}
            on:change={onChange}
        >
            <option value={Material.None}>No Selection</option>

            {#each AllMaterials as material}
                <option value={material}>{Materials[material].name}</option>
            {/each}
        </select>
        <div class="absolute top-1/2 -translate-y-1/2 text-neutral-200 right-2.5">
            <CaretDown />
        </div>
    </div>

    <button
        class="flex h-9 w-9 items-center justify-center rounded-md text-transparent data-[cross=true]:text-neutral-400 hover:text-neutral-200 transition-colors"
        data-cross={material === Material.None}
        style="background: {Materials[material].color}"
        on:click={() => {material = Material.None; onChange()}}
    >
        <X />
    </button>
</div>
