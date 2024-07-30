<script lang="ts">
    import { X } from "phosphor-svelte";
    import { ShaderColor, ShaderSlot } from "../lib/types";
    import editor from "../lib/editor";

    export let slot: ShaderSlot;

    let color = ShaderColor.NoColor;

    function onChange() {
        editor.update((editor) => {
            editor[slot] = color;
            return editor;
        });
    }

    editor.subscribe((value) => {
        color = value[slot];
    });
</script>

<div class="dropdown__root">
    <select class="dropdown__select" bind:value={color} on:change={onChange}>
        <option value={ShaderColor.NoColor}>No Selection</option>

        <!-- Simple Colours -->
        <option value={ShaderColor.Red}>Red</option>
        <option value={ShaderColor.Yellow}>Yellow</option>
        <option value={ShaderColor.Orange}>Orange</option>
        <option value={ShaderColor.Green}>Green</option>
        <option value={ShaderColor.Blue}>Blue</option>
        <option value={ShaderColor.Purple}>Purple</option>
        <option value={ShaderColor.White}>White</option>
        <option value={ShaderColor.Black}>Black</option>
    </select>
    <div
        class="dropdown__preview"
        style="background: {color}"
    >
        {#if color === ShaderColor.NoColor}
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
