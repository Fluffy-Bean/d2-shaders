<script lang="ts">
    import { ShaderSlot } from "../lib/types";
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
            <small>Top Fabric/Leather</small>
            <ColorDropdown slot={ShaderSlot.TopFabric} />
        </div>

        <div style="margin-bottom: 8px">
            <small>Left Fabric/Leather</small>
            <ColorDropdown slot={ShaderSlot.LeftFabric} />
        </div>

        <div style="margin-bottom: 8px">
            <small>Right Fabric/Leather</small>
            <ColorDropdown slot={ShaderSlot.RightFabric} />
        </div>

        <div style="margin-bottom: 8px">
            <small>Bottom Fabric/Leather</small>
            <ColorDropdown slot={ShaderSlot.BottomFabric} />
        </div>

        <hr style="margin: 16px 0">

        <div style="margin-bottom: 8px">
            <small>Top Lights</small>
            <ColorDropdown slot={ShaderSlot.TopLight} />
        </div>

        <div style="margin-bottom: 8px">
            <small>Bottom Lights</small>
            <ColorDropdown slot={ShaderSlot.BottomLight} />
        </div>

        <hr style="margin: 16px 0">

        <div style="margin-bottom: 8px">
            <small>Metal 1</small>
            <ColorDropdown slot={ShaderSlot.OuterMetal} />
        </div>

        <div style="margin-bottom: 8px">
            <small>Metal 2</small>
            <ColorDropdown slot={ShaderSlot.InnerMetal} />
        </div>
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

        //background-image: repeating-linear-gradient(
        //    0.8turn,
        //    rgba(var(--color-surface), 0.5) 3px,
        //    rgba(var(--color-surface), 0.2) 3px,
        //    rgba(var(--color-surface), 0.2) 6px,
        //    rgba(var(--color-surface), 0.5) 6px,
        //    rgba(var(--color-surface), 0.5) 9px,
        //);
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
</style>
