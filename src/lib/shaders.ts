import { type Readable, readable, get } from "svelte/store";
import { type Shader, ShaderColor, ShaderSlot } from "./types";
import editor from "./editor";
import DB from "./db";

function makeStore() {
    const store: Readable<Shader[]> = readable(DB);

    function filter(): Array<Shader> {
        let e = get(editor);
        return get(store).filter((item: Shader) => {
            if (e[ShaderSlot.TopFabric] !== ShaderColor.NoColor && e[ShaderSlot.TopFabric] !== item.colors.TopFabric) return false
            if (e[ShaderSlot.RightFabric] !== ShaderColor.NoColor && e[ShaderSlot.RightFabric] !== item.colors.RightFabric) return false
            if (e[ShaderSlot.LeftFabric] !== ShaderColor.NoColor && e[ShaderSlot.LeftFabric] !== item.colors.LeftFabric) return false
            if (e[ShaderSlot.BottomFabric] !== ShaderColor.NoColor && e[ShaderSlot.BottomFabric] !== item.colors.BottomFabric) return false
            if (e[ShaderSlot.TopLight] !== ShaderColor.NoColor && e[ShaderSlot.TopLight] !== item.colors.TopLight) return false
            if (e[ShaderSlot.BottomLight] !== ShaderColor.NoColor && e[ShaderSlot.BottomLight] !== item.colors.BottomLight) return false
            if (e[ShaderSlot.OuterMetal] !== ShaderColor.NoColor && e[ShaderSlot.OuterMetal] !== item.colors.OuterMetal) return false
            if (e[ShaderSlot.InnerMetal] !== ShaderColor.NoColor && e[ShaderSlot.InnerMetal] !== item.colors.InnerMetal) return false
            return true
        });
    }

    return {
        ...store,
        filter,
    };
}

const shaders = makeStore();
export default shaders;
