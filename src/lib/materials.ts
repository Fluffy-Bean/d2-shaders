enum Material {
    None,
    Red,
    Orange,
    Yellow,
    Lime,
    Green,
    Cyan,
    Blue,
    Purple,
    Pink,
    White,
    Grey,
    Black,
    Brown,
    Gold,
    Pale,
    Bronze,
    Rose,
    Silver,
    Emerald,
    VexBlue,
    DaitoMagenta,
    RoseGold,
    WornBlue,
}

export enum MaterialSlot {
    TopFabric,
    RightFabric,
    LeftFabric,
    BottomFabric,
    TopLight,
    BottomLight,
    OuterMetal,
    InnerMetal,
}

// ToDo: Add type, Solid, Metal, Cloth etc
interface IMaterial {
    name: string,
    color: string,
}

const Materials: Record<Material, IMaterial> = {
    [Material.None]: {
        name: "None",
        color: "#171717", // tailwind neutral-900
    },
    [Material.Red]: {
        name: "Red",
        color: "#B75B5B",
    },
    [Material.Orange]: {
        name: "Orange",
        color: "#C27B45",
    },
    [Material.Yellow]: {
        name: "Yellow",
        color: "#D9B565",
    },
    [Material.Lime]: {
        name: "Lime",
        color: "#A6AD64",
    },
    [Material.Green]: {
        name: "Green",
        color: "#669266",
    },
    [Material.Cyan]: {
        name: "Cyan",
        color: "#5A9CA5",
    },
    [Material.Blue]: {
        name: "Blue",
        color: "#6C89B1",
    },
    [Material.Purple]: {
        name: "Purple",
        color: "#9A6FA2",
    },
    [Material.Pink]: {
        name: "Pink",
        color: "#B56C89",
    },
    [Material.White]: {
        name: "White",
        color: "#e0e0e0",
    },
    [Material.Grey]: {
        name: "Grey",
        color: "#4b4b4b",
    },
    [Material.Black]: {
        name: "Black",
        color: "#151515",
    },
    [Material.Brown]: {
        name: "Brown",
        color: "#493228",
    },
    [Material.Gold]: {
        name: "Gold",
        color: "#c2a042",
    },
    [Material.Pale]: {
        name: "Pale",
        color: "#d4c69f",
    },
    [Material.Bronze]: {
        name: "Bronze",
        color: "#53220b",
    },
    [Material.Rose]: {
        name: "Rose",
        color: "#52091b",
    },
    [Material.Silver]: {
        name: "Silver",
        color: "#afafa7",
    },
    [Material.Emerald]: {
        name: "Emerald",
        color: "#0a2b18",
    },
    [Material.VexBlue]: {
        name: "Vex Blue",
        color: "#b7e3ee",
    },
    [Material.DaitoMagenta]: {
        name: "Daito Magenta",
        color: "#bb00b2",
    },
    [Material.RoseGold]: {
        name: "Rose Gold",
        color: "#ac624c",
    },
    [Material.WornBlue]: {
        name: "Worn Blue",
        color: "#223441",
    },
};

export { Material, Materials };
