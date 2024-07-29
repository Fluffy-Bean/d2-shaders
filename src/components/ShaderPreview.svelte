<script lang="ts">
    import { ShaderColor, ShaderSlot } from "../lib/types";
    import editor from "../lib/editor";

    const surface = "var(--color-on-surface)"

    let topFabric = ShaderColor.NoColor;
    let rightFabric = ShaderColor.NoColor;
    let leftFabric = ShaderColor.NoColor;
    let bottomFabric = ShaderColor.NoColor;
    let topLight = ShaderColor.NoColor;
    let bottomLight = ShaderColor.NoColor;
    let outerMetal = ShaderColor.NoColor;
    let innerMetal = ShaderColor.NoColor;

    editor.subscribe((values: Record<ShaderSlot, ShaderColor>) => {
        topFabric = values[ShaderSlot.TopFabric];
        rightFabric = values[ShaderSlot.RightFabric];
        leftFabric = values[ShaderSlot.LeftFabric];
        bottomFabric = values[ShaderSlot.BottomFabric];
        topLight = values[ShaderSlot.TopLight];
        bottomLight = values[ShaderSlot.BottomLight];
        outerMetal = values[ShaderSlot.OuterMetal];
        innerMetal = values[ShaderSlot.InnerMetal];
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
            style="fill:{topFabric};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            d="M 0,0 100,100 200,0 Z"
            id="path1"
        />
        <path
            style="fill:{leftFabric};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            d="M 0,200 100,100 0,0 Z"
            id="path1-1"
        />
        <path
            style="fill:{bottomFabric};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            d="M 200,200 100,100 0,200 Z"
            id="path1-1-8"
        />
        <path
            style="fill:{rightFabric};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1"
            d="M 200,0 100,100 200,200 Z"
            id="path1-8"
        />
        <path
            style="fill:{topLight};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="M 62.5,62.5 100,25 137.5,62.5 100.03449,100 Z"
            id="path2"
        />
        <path
            style="fill:{bottomLight};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="M 62.5,137.5 100,100 137.5,137.5 100,175 Z"
            id="path2-3"
        />
        <path
            style="fill:{outerMetal};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
            d="M 100,35 35,100 100.00982,165 165,100 Z"
            id="path3"
        />
        <path
            style="fill:{innerMetal};fill-opacity:1;stroke:{surface};stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
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
