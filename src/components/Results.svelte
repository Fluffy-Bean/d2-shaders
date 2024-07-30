<script lang="ts">
    import { scale } from "svelte/transition";
    import editorStore from "../lib/editorStore";
    import shaderStore from "../lib/shaderStore";

    let items = shaderStore.filter();
    editorStore.subscribe(() => { items = shaderStore.filter() })
</script>

<div id="results" class="results__root">
    <ul class="results__list">
        {#each items as shader}
            <li class="results__list__item" transition:scale={{ duration: 200, start: 0.9, }} title={shader.name}>
                <img src="https://www.bungie.net/common/destiny2_content/icons/{shader.image}" alt={shader.name} />
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
    .results__root {
        padding-left: 400px;
    }

    .results__list {
        padding: 16px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 8px;
    }

    .results__list__item {
        width: 100px;
        height: 100px;

        position: relative;

        border-radius: var(--border-radius-normal);

        list-style: none;
        overflow: hidden;

        > img {
            width: 100%;
            height: 100%;

            position: absolute;
            top: 0;
            left: 0;
        }
    }
</style>
