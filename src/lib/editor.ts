import { type Writable, writable } from "svelte/store";
import { ShaderSlot, ShaderColor } from "./types";

function makeStore() {
    const store: Writable<Record<ShaderSlot, ShaderColor>> = writable({
        [ShaderSlot.TopFabric]: ShaderColor.NoColor,
        [ShaderSlot.RightFabric]: ShaderColor.NoColor,
        [ShaderSlot.LeftFabric]: ShaderColor.NoColor,
        [ShaderSlot.BottomFabric]: ShaderColor.NoColor,
        [ShaderSlot.TopLight]: ShaderColor.NoColor,
        [ShaderSlot.BottomLight]: ShaderColor.NoColor,
        [ShaderSlot.OuterMetal]: ShaderColor.NoColor,
        [ShaderSlot.InnerMetal]: ShaderColor.NoColor,
    });

    return {
        ...store,
    };
}

const editor = makeStore();
export default editor;
