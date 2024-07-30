<script lang="ts">
    import { Material, Materials, MaterialSlot } from "../lib/materials";
    import editorStore from "../lib/editorStore";

    const surface = "var(--color-on-surface)"

    let topFabric = Material.None;
    let rightFabric = Material.None;
    let leftFabric = Material.None;
    let bottomFabric = Material.None;
    let topLight = Material.None;
    let bottomLight = Material.None;
    let outerMetal = Material.None;
    let innerMetal = Material.None;

    editorStore.subscribe((values: Record<MaterialSlot, Material>) => {
        topFabric = values[MaterialSlot.TopFabric];
        rightFabric = values[MaterialSlot.RightFabric];
        leftFabric = values[MaterialSlot.LeftFabric];
        bottomFabric = values[MaterialSlot.BottomFabric];
        topLight = values[MaterialSlot.TopLight];
        bottomLight = values[MaterialSlot.BottomLight];
        outerMetal = values[MaterialSlot.OuterMetal];
        innerMetal = values[MaterialSlot.InnerMetal];
    });
</script>

<svg
    width="201"
    height="201"
    viewBox="0 0 201 201"
    version="1.1"
    id="svg1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:svg="http://www.w3.org/2000/svg"
>
    <defs id="defs1" />
    <g
        id="layer1"
        transform="translate(0.49999851,0.49999851)"
    >
        <path
            style="fill:{Materials[topFabric].color};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            d="M 0,0 100,100 200,0 Z"
            id="path1"
        />
        <path
            style="fill:{Materials[leftFabric].color};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            d="M 0,200 100,100 0,0 Z"
            id="path1-1"
        />
        <path
            style="fill:{Materials[bottomFabric].color};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            d="M 200,200 100,100 0,200 Z"
            id="path1-1-8"
        />
        <path
            style="fill:{Materials[rightFabric].color};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            d="M 200,0 100,100 200,200 Z"
            id="path1-8"
        />
        <path
            style="fill:{Materials[topLight].color};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="M 62.5,62.5 100,25 137.5,62.5 100.03449,100 Z"
            id="path2"
        />
        <path
            style="fill:{Materials[bottomLight].color};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="M 62.5,137.5 100,100 137.5,137.5 100,175 Z"
            id="path2-3"
        />
        <path
            style="fill:{Materials[outerMetal].color};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="M 100,35 35,100 100.00982,165 165,100 Z"
            id="path3"
        />
        <path
            style="fill:{Materials[innerMetal].color};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="m 100,55 -45,45 45,45 45,-45 z"
            id="path3-6"
        />
    </g>
</svg>

<style lang="scss">
    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
