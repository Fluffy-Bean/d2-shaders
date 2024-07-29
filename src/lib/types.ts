export enum ShaderColor {
    NoColor = "var(--color-surface)",
    Red = "var(--color-red)",
    Yellow = "var(--color-yellow)",
    Orange = "var(--color-orange)",
    Green = "var(--color-green)",
    Blue = "var(--color-blue)",
    Purple = "var(--color-purple)",
    White = "var(--color-white)",
    Black = "var(--color-black)",
}

export enum ShaderSlot {
    TopFabric,
    RightFabric,
    LeftFabric,
    BottomFabric,
    TopLight,
    BottomLight,
    OuterMetal,
    InnerMetal,
}

export interface Shader {
    name: string,
    source: string,
    image: string,
    colors: {
        TopFabric: ShaderColor,
        RightFabric: ShaderColor,
        LeftFabric: ShaderColor,
        BottomFabric: ShaderColor,
        TopLight: ShaderColor,
        BottomLight: ShaderColor,
        OuterMetal: ShaderColor,
        InnerMetal: ShaderColor,
    };
}
