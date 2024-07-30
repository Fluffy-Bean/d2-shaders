export enum ShaderColor {
    NoColor = "var(--color-surface)",
    Red = "var(--color-red)",
    Orange = "var(--color-orange)",
    Yellow = "var(--color-yellow)",
    Lime = "var(--color-lime)",
    Green = "var(--color-green)",
    Cyan = "var(--color-cyan)",
    Blue = "var(--color-blue)",
    Purple = "var(--color-purple)",
    Pink = "var(--color-pink)",
    White = "var(--color-white)",
    Grey = "var(--color-grey)",
    Black = "var(--color-black)",
    Brown = "var(--color-brown)",
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
