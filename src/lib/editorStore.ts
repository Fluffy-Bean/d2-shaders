import { type Writable, writable } from "svelte/store";
import { Material, MaterialSlot } from "./materials";

interface EditorState {
    material: {
        [MaterialSlot.TopFabric]: Material,
        [MaterialSlot.RightFabric]: Material,
        [MaterialSlot.LeftFabric]: Material,
        [MaterialSlot.BottomFabric]: Material,
        [MaterialSlot.TopLight]: Material,
        [MaterialSlot.BottomLight]: Material,
        [MaterialSlot.OuterMetal]: Material,
        [MaterialSlot.InnerMetal]: Material,
    },
    open: boolean,
}

function makeStore() {
    const store: Writable<EditorState> = writable({
        material: {
            [MaterialSlot.TopFabric]: Material.None,
            [MaterialSlot.RightFabric]: Material.None,
            [MaterialSlot.LeftFabric]: Material.None,
            [MaterialSlot.BottomFabric]: Material.None,
            [MaterialSlot.TopLight]: Material.None,
            [MaterialSlot.BottomLight]: Material.None,
            [MaterialSlot.OuterMetal]: Material.None,
            [MaterialSlot.InnerMetal]: Material.None,
        },
        open: true,
    });

    function toggleEditor(): void {
        store.update(editor => {
            editor.open = !editor.open;
            return editor;
        })
    }

    function reset(): void {
        store.set({
            material: {
                [MaterialSlot.TopFabric]: Material.None,
                [MaterialSlot.RightFabric]: Material.None,
                [MaterialSlot.LeftFabric]: Material.None,
                [MaterialSlot.BottomFabric]: Material.None,
                [MaterialSlot.TopLight]: Material.None,
                [MaterialSlot.BottomLight]: Material.None,
                [MaterialSlot.OuterMetal]: Material.None,
                [MaterialSlot.InnerMetal]: Material.None,
            },
            open: true,
        });
    }

    return {
        ...store,
        toggleEditor,
        reset,
    };
}

const editorStore = makeStore();
export default editorStore;
