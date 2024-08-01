<script lang="ts">
    import { X } from "phosphor-svelte";
    import { Material, Materials, MaterialSlot } from "../lib/materials";
    import editorStore from "../lib/editorStore";

    export let slot: MaterialSlot;

    let material = Material.None;

    function onChange() {
        editorStore.update((editor) => {
            editor[slot] = material;
            return editor;
        });
    }

    editorStore.subscribe((value) => {
        material = value[slot];
    });
</script>

<div class="flex w-full flex-row items-center justify-start gap-2">
    <select class="h-9 flex-grow rounded-md border-0 bg-neutral-300 px-4 text-sm text-neutral-900 hover:bg-neutral-200 focus:outline-px" bind:value={material} on:change={onChange}>
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

    <div class="flex h-9 w-9 items-center justify-center rounded-md border border-neutral-400 text-neutral-400" style="background: {Materials[material].color}">
        {#if material === Material.None}
            <X />
        {/if}
    </div>
</div>
