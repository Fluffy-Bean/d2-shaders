<script lang="ts">
    import { ArrowClockwise, X } from "phosphor-svelte";
    import { MaterialSlot } from "../lib/materials";
    import editorStore from "../lib/editorStore";
    import ColorDropdown from "./ColorDropdown.svelte";
    import ShaderPreview from "./ShaderPreview.svelte";

    let width = 0;
</script>

<svelte:window bind:innerWidth={width} />

{#if $editorStore.open}
    <div
        class="sticky top-0 left-0 h-screen w-full bg-neutral-900 text-neutral-200 min-w-96 max-w-96 data-[mobile=true]:min-w-0 data-[mobile=true]:max-w-full transition-all"
        data-mobile={width <= 720}
    >
            {#if width <= 720}
                <button
                    class="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 bg-opacity-80 backdrop-blur hover:bg-neutral-700"
                    on:click={editorStore.toggleEditor}
                >
                    <X />
                </button>
            {/if}

            <div class="absolute inset-0 flex h-full w-full flex-col overflow-y-auto overflow-x-hidden p-4">
                <div class="mb-4 flex h-60 items-center justify-center">
                    <ShaderPreview />
                </div>

                <div class="mb-4 rounded-xl bg-neutral-800 p-4">
                    <h2 class="mb-2 font-bold">Fabric and Leathers</h2>

                    <div class="mb-3">
                        <p class="text-sm mb-0.5">Top</p>
                        <ColorDropdown slot={MaterialSlot.TopFabric} />
                    </div>
                    <div class="mb-3">
                        <p class="text-sm mb-0.5">Bottom</p>
                        <ColorDropdown slot={MaterialSlot.BottomFabric} />
                    </div>
                    <div class="mb-3">
                        <p class="text-sm mb-0.5">Left</p>
                        <ColorDropdown slot={MaterialSlot.LeftFabric} />
                    </div>
                    <div>
                        <p class="text-sm mb-0.5">Right</p>
                        <ColorDropdown slot={MaterialSlot.RightFabric} />
                    </div>
                </div>

                <div class="mb-4 rounded-xl bg-neutral-800 p-4">
                    <h2 class="mb-2 font-bold">Lights</h2>

                    <div class="mb-3">
                        <p class="text-sm mb-0.5">Top</p>
                        <ColorDropdown slot={MaterialSlot.TopLight} />
                    </div>
                    <div>
                        <p class="text-sm mb-0.5">Bottom</p>
                        <ColorDropdown slot={MaterialSlot.BottomLight} />
                    </div>
                </div>

                <div class="rounded-xl bg-neutral-800 p-4">
                    <h2 class="mb-2 font-bold">Metals</h2>

                    <div class="mb-3">
                        <p class="text-sm mb-0.5">Outer</p>
                        <ColorDropdown slot={MaterialSlot.OuterMetal} />
                    </div>
                    <div>
                        <p class="text-sm mb-0.5">Inner</p>
                        <ColorDropdown slot={MaterialSlot.InnerMetal} />
                    </div>
                </div>

                <div class="flex-grow" />

                <!-- move down past padding and apply own padding to bottom -->
                <div class="sticky -bottom-4 left-0 -mx-4 -mb-4 bg-neutral-900 bg-opacity-80 px-4 py-2 backdrop-blur">
                    <button class="flex h-9 w-full items-center justify-center gap-2 rounded-md bg-transparent p-2 text-sm text-neutral-100 hover:bg-red-800 focus:outline-px" on:click={() => {editorStore.reset()}}>
                        <ArrowClockwise />
                        <span>Reset</span>
                    </button>
                </div>
            </div>
</div>
{/if}
