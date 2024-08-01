<script>
    import "./app.css";

    import { CaretRight } from "phosphor-svelte";
    import Editor from "./components/Editor.svelte";
    import Results from "./components/Results.svelte";
    import ShaderPreview from "./components/ShaderPreview.svelte";
    import editorStore from "./lib/editorStore";

    let width = 0;

    window.onresize = () => {
        if (width > 720) {
            editorStore.update(editor => {
                editor.open = true;
                return editor;
            })
        }
    }
</script>

<svelte:window bind:innerWidth={width} />

<div class="relative flex min-h-screen flex-row bg-neutral-800">
    <Editor />
    <Results />
    {#if !$editorStore.open}
        <button
            class="fixed bottom-4 left-0 z-40 flex items-center justify-center rounded-r-xl bg-neutral-900 bg-opacity-80 p-2 text-neutral-200 backdrop-blur hover:bg-neutral-700"
            on:click={editorStore.toggleEditor}
        >
            <span class="mr-2 flex h-12 items-center justify-center">
                <ShaderPreview />
            </span>
            <CaretRight />
        </button>
    {/if}
</div>
