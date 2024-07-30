<script lang="ts">
    import { ArrowClockwise } from "phosphor-svelte";
    import { MaterialSlot } from "../lib/materials";
    import editorStore from "../lib/editorStore";
    import ColorDropdown from "./ColorDropdown.svelte";
    import ShaderPreview from "./ShaderPreview.svelte";

    let offset: number;
</script>

<svelte:window bind:scrollY={offset} />

<div id="editor" class="editor__root" style="top: {offset}px">
    <div class="editor__nav"></div>

    <div class="editor__tab">
        <div class="editor__tab__preview">
            <ShaderPreview />
        </div>

        <div style="margin-bottom: 8px">
            <p>Top Fabric/Leather</p>
            <ColorDropdown slot={MaterialSlot.TopFabric} />
        </div>

        <div style="margin-bottom: 8px">
            <p>Left Fabric/Leather</p>
            <ColorDropdown slot={MaterialSlot.LeftFabric} />
        </div>

        <div style="margin-bottom: 8px">
            <p>Right Fabric/Leather</p>
            <ColorDropdown slot={MaterialSlot.RightFabric} />
        </div>

        <div style="margin-bottom: 8px">
            <p>Bottom Fabric/Leather</p>
            <ColorDropdown slot={MaterialSlot.BottomFabric} />
        </div>

        <hr style="margin: 16px 0">

        <div style="margin-bottom: 8px">
            <p>Top Lights</p>
            <ColorDropdown slot={MaterialSlot.TopLight} />
        </div>

        <div style="margin-bottom: 8px">
            <p>Bottom Lights</p>
            <ColorDropdown slot={MaterialSlot.BottomLight} />
        </div>

        <hr style="margin: 16px 0">

        <div style="margin-bottom: 8px">
            <p>Outer Metal</p>
            <ColorDropdown slot={MaterialSlot.OuterMetal} />
        </div>

        <div style="margin-bottom: 8px">
            <p>Inner Metal</p>
            <ColorDropdown slot={MaterialSlot.InnerMetal} />
        </div>

        <hr style="margin: 16px 0">

        <button class="editor__reset-button" on:click={() => {editorStore.reset()}}>
            <ArrowClockwise />
            <span>Reset</span>
        </button>
    </div>
</div>

<style lang="scss">
    .editor__root {
        width: 100%;
        max-width: 400px;
        height: 100vh;

        position: absolute;
        top: 0;
        left: 0;

        overflow: hidden hidden;

        transition: bottom 0.2s cubic-bezier(.19,1,.22,1);
    }

    .editor__nav {
        width: 100%;
        height: 50px;

        position: absolute;
        top: 0;
        left: 0;

        backdrop-filter: blur(3px);
        display: none;
    }

    .editor__tab {
        padding: 16px;

        width: 100%;
        max-width: 400px;

        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;

        background: var(--color-surface);
        color: var(--color-on-surface);
        overflow: hidden auto;
    }

    .editor__tab__preview {
        margin-bottom: 16px;

        height: 250px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .editor__reset-button {
        padding: 0 18px;

        width: 100%;
        height: 35px;

        display: flex;
        gap: 6px;
        justify-content: center;
        align-items: center;

        font-family: var(--font-family), serif;
        font-size: var(--font-size-small);
        font-weight: var(--font-weight-bold);
        text-decoration: none;

        border-radius: var(--border-radius-large);
        border: 1px solid transparent;
        background: var(--color-gray);
        color: var(--color-on-gray);
        &:hover, &:focus-visible {
            background: var(--color-destructive);
            color: var(--color-on-destructive);
            cursor: pointer;
        }
    }
</style>
