<script lang="ts">
    import { CaretDown, X } from "phosphor-svelte";
    import { Material, Materials, MaterialSlot } from "../lib/materials";
    import editorStore from "../lib/editorStore";

    export let slot: MaterialSlot;

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

            <option value={Material.Red}>Red</option>
            <option value={Material.Orange}>Orange</option>
            <option value={Material.Yellow}>Yellow</option>
            <option value={Material.Lime}>Lime</option>
            <option value={Material.Green}>Green</option>
            <option value={Material.Cyan}>Cyan</option>
            <option value={Material.Blue}>Blue</option>
            <option value={Material.Purple}>Purple</option>
            <option value={Material.Pink}>Pink</option>
            <option value={Material.White}>White</option>
            <option value={Material.Grey}>Grey</option>
            <option value={Material.Black}>Black</option>
            <option value={Material.Brown}>Brown</option>
            <option value={Material.Gold}>Gold</option>
            <option value={Material.Pale}>Pale</option>
            <option value={Material.Bronze}>Bronze</option>
            <option value={Material.Rose}>Rose</option>
            <option value={Material.Silver}>Silver</option>
            <option value={Material.Emerald}>Emerald</option>
            <option value={Material.VexBlue}>VexBlue</option>
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
