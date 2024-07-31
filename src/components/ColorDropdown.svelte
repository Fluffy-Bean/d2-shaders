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

<div class="dropdown__root">
    <select class="dropdown__select" bind:value={material} on:change={onChange}>
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
    <div class="dropdown__preview" style="background: {Materials[material].color}">
        {#if material === Material.None}
            <X />
        {/if}
    </div>
</div>

<style lang="scss">
    .dropdown__root {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
    }

    .dropdown__preview {
        width: 35px;
        height: 35px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: var(--color-border);
        border-radius: var(--border-radius-large);
        background: transparent;
        color: var(--color-on-surface);
    }

    .dropdown__select {
        padding: 0 16px;

        height: 35px;

        display: block;
        flex-grow: 1;

        font-family: var(--font-family), serif;
        font-size: var(--font-size-small);

        border-radius: var(--border-radius-large);
        border: 0 solid transparent;
        background: var(--color-gray);
        color: var(--color-on-gray);
        &:hover, &:focus-visible {
            border: 0 solid transparent;
            outline: 0 solid transparent;
            background: var(--color-light);
            color: var(--color-on-light);
            cursor: pointer;
        }
    }
</style>
