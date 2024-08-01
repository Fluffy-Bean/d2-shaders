import { type Readable, readable, get } from "svelte/store";
import { type Shader, Shaders } from "./shader";
import { Material, MaterialSlot } from "./materials";
import editorStore from "./editorStore";

function makeStore() {
    const store: Readable<Shader[]> = readable(Shaders);

    function filter(): Array<Shader> {
        let editor = get(editorStore);
        return get(store).filter((item: Shader) => {
            if (editor.material[MaterialSlot.TopFabric] !== Material.None && editor.material[MaterialSlot.TopFabric] !== item.colors.TopFabric) return false
            if (editor.material[MaterialSlot.RightFabric] !== Material.None && editor.material[MaterialSlot.RightFabric] !== item.colors.RightFabric) return false
            if (editor.material[MaterialSlot.LeftFabric] !== Material.None && editor.material[MaterialSlot.LeftFabric] !== item.colors.LeftFabric) return false
            if (editor.material[MaterialSlot.BottomFabric] !== Material.None && editor.material[MaterialSlot.BottomFabric] !== item.colors.BottomFabric) return false
            if (editor.material[MaterialSlot.TopLight] !== Material.None && editor.material[MaterialSlot.TopLight] !== item.colors.TopLight) return false
            if (editor.material[MaterialSlot.BottomLight] !== Material.None && editor.material[MaterialSlot.BottomLight] !== item.colors.BottomLight) return false
            if (editor.material[MaterialSlot.OuterMetal] !== Material.None && editor.material[MaterialSlot.OuterMetal] !== item.colors.OuterMetal) return false
            if (editor.material[MaterialSlot.InnerMetal] !== Material.None && editor.material[MaterialSlot.InnerMetal] !== item.colors.InnerMetal) return false
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
