import { type Writable, writable } from "svelte/store";
import { Material, MaterialSlot } from "./materials";

function makeStore() {
    const store: Writable<Record<MaterialSlot, Material>> = writable({
        [MaterialSlot.TopFabric]: Material.None,
        [MaterialSlot.RightFabric]: Material.None,
        [MaterialSlot.LeftFabric]: Material.None,
        [MaterialSlot.BottomFabric]: Material.None,
        [MaterialSlot.TopLight]: Material.None,
        [MaterialSlot.BottomLight]: Material.None,
        [MaterialSlot.OuterMetal]: Material.None,
        [MaterialSlot.InnerMetal]: Material.None,
    });

    function reset(): void {
        store.set({
            [MaterialSlot.TopFabric]: Material.None,
            [MaterialSlot.RightFabric]: Material.None,
            [MaterialSlot.LeftFabric]: Material.None,
            [MaterialSlot.BottomFabric]: Material.None,
            [MaterialSlot.TopLight]: Material.None,
            [MaterialSlot.BottomLight]: Material.None,
            [MaterialSlot.OuterMetal]: Material.None,
            [MaterialSlot.InnerMetal]: Material.None,
        });
    }

    return {
        ...store,
        reset,
    };
}

const editorStore = makeStore();
export default editorStore;
