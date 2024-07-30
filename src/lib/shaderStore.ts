import { type Readable, readable, get } from "svelte/store";
import { type Shader, Shaders } from "./shader";
import { Material, MaterialSlot } from "./materials";
import editorStore from "./editorStore";

function makeStore() {
    const store: Readable<Shader[]> = readable(Shaders);

    function filter(): Array<Shader> {
        let e = get(editorStore);
        return get(store).filter((item: Shader) => {
            if (e[MaterialSlot.TopFabric] !== Material.None && e[MaterialSlot.TopFabric] !== item.colors.TopFabric) return false
            if (e[MaterialSlot.RightFabric] !== Material.None && e[MaterialSlot.RightFabric] !== item.colors.RightFabric) return false
            if (e[MaterialSlot.LeftFabric] !== Material.None && e[MaterialSlot.LeftFabric] !== item.colors.LeftFabric) return false
            if (e[MaterialSlot.BottomFabric] !== Material.None && e[MaterialSlot.BottomFabric] !== item.colors.BottomFabric) return false
            if (e[MaterialSlot.TopLight] !== Material.None && e[MaterialSlot.TopLight] !== item.colors.TopLight) return false
            if (e[MaterialSlot.BottomLight] !== Material.None && e[MaterialSlot.BottomLight] !== item.colors.BottomLight) return false
            if (e[MaterialSlot.OuterMetal] !== Material.None && e[MaterialSlot.OuterMetal] !== item.colors.OuterMetal) return false
            if (e[MaterialSlot.InnerMetal] !== Material.None && e[MaterialSlot.InnerMetal] !== item.colors.InnerMetal) return false
            return true
        });
    }

    return {
        ...store,
        filter,
    };
}

const shaderStore = makeStore();
export default shaderStore;
