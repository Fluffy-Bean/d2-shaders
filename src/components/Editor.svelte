<script lang="ts">
    import { ArrowClockwise } from "phosphor-svelte";
    import { MaterialSlot } from "../lib/materials";
    import editorStore from "../lib/editorStore";
    import ColorDropdown from "./ColorDropdown.svelte";
    import ShaderPreview from "./ShaderPreview.svelte";
</script>

<div class="sticky top-0 left-0 h-screen w-full min-w-96 max-w-96">
    <div class="absolute inset-0 flex h-full w-full flex-col overflow-y-auto overflow-x-hidden bg-neutral-900 p-4 text-neutral-200">
        <div class="mb-4 flex h-60 items-center justify-center">
            <ShaderPreview />
        </div>

        <div class="mb-4 rounded-xl bg-neutral-800 p-4">
            <div class="mb-3">
                <p class="text-sm mb-0.5">Top Fabric/Leather</p>
                <ColorDropdown slot={MaterialSlot.TopFabric} />
            </div>

            <div class="mb-3">
                <p class="text-sm mb-0.5">Left Fabric/Leather</p>
                <ColorDropdown slot={MaterialSlot.LeftFabric} />
            </div>

            <div class="mb-3">
                <p class="text-sm mb-0.5">Right Fabric/Leather</p>
                <ColorDropdown slot={MaterialSlot.RightFabric} />
            </div>

            <div>
                <p class="text-sm mb-0.5">Bottom Fabric/Leather</p>
                <ColorDropdown slot={MaterialSlot.BottomFabric} />
            </div>
        </div>

        <div class="mb-4 rounded-xl bg-neutral-800 p-4">
            <div class="mb-3">
                <p class="text-sm mb-0.5">Top Lights</p>
                <ColorDropdown slot={MaterialSlot.TopLight} />
            </div>

            <div>
                <p class="text-sm mb-0.5">Bottom Lights</p>
                <ColorDropdown slot={MaterialSlot.BottomLight} />
            </div>
        </div>

        <div class="mb-4 rounded-xl bg-neutral-800 p-4">
            <div class="mb-3">
                <p class="text-sm mb-0.5">Outer Metal</p>
                <ColorDropdown slot={MaterialSlot.OuterMetal} />
            </div>

            <div>
                <p class="text-sm mb-0.5">Inner Metal</p>
                <ColorDropdown slot={MaterialSlot.InnerMetal} />
            </div>
        </div>

        <div class="flex-grow" />

        <!-- move down past padding and apply own padding to bottom -->
        <div class="sticky -bottom-4 left-0 -mb-4 rounded-t-md bg-neutral-900 pb-4">
            <button class="flex h-9 w-full items-center justify-center gap-2 rounded-md bg-transparent p-2 text-sm text-neutral-100 hover:bg-red-800 focus:outline-px" on:click={() => {editorStore.reset()}}>
                <ArrowClockwise />
                <span>Reset</span>
            </button>
        </div>
    </div>
</div>
