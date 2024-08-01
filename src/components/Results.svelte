<script lang="ts">
    import { scale } from "svelte/transition";
    import editorStore from "../lib/editorStore";
    import shaderStore from "../lib/shaderStore";

    let items = shaderStore.filter();
    editorStore.subscribe(() => { items = shaderStore.filter() })
</script>

<div class="flex-grow overflow-hidden">
    <ul class="flex flex-row flex-wrap gap-2 p-4">
        {#each items as shader}
            <li class="relative h-24 w-24 overflow-hidden rounded-md bg-neutral-800" transition:scale={{ duration: 200, start: 0.9, }} title={shader.name}>
                <img
                    class="absolute top-0 left-0 h-full w-full object-cover"
                    src="https://www.bungie.net/common/destiny2_content/icons/{shader.image}"
                    alt={shader.name}
                />
            </li>
        {/each}
    </ul>
</div>
`