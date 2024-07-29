import { type Shader, ShaderColor } from "./types";

const DB: Shader[] = [
    {
        name: "Always North",
        source: "Source: Forsaken Annual Pass",
        image: "/common/destiny2_content/icons/80699ae7fd7f109f2d0521b07eb0db35.jpg",
        colors: {
            TopFabric: ShaderColor.Red,
            LeftFabric: ShaderColor.Yellow,
            RightFabric: ShaderColor.Green,
            BottomFabric: ShaderColor.Black,
            TopLight: ShaderColor.White,
            BottomLight: ShaderColor.White,
            OuterMetal: ShaderColor.Orange,
            InnerMetal: ShaderColor.Green,
        },
    },
    {
        name: "Diametric Crush",
        source: "Source: \"Salvation's Edge\" Raid",
        image: "/common/destiny2_content/icons/5c2102e7dd7068c38059b518038af413.jpg",
        colors: {
            TopFabric: ShaderColor.White,
            LeftFabric: ShaderColor.White,
            RightFabric: ShaderColor.Black,
            BottomFabric: ShaderColor.Black,
            TopLight: ShaderColor.Yellow,
            BottomLight: ShaderColor.Yellow,
            OuterMetal: ShaderColor.White,
            InnerMetal: ShaderColor.Green,
        },
    },
    {
        name: "Superblack",
        source: "Source: Season of the Wish",
        image: "/common/destiny2_content/icons/574f5c8ef1eea552d2f2e01c6141a465.jpg",
        colors: {
            TopFabric: ShaderColor.Black,
            LeftFabric: ShaderColor.Black,
            RightFabric: ShaderColor.Black,
            BottomFabric: ShaderColor.Black,
            TopLight: ShaderColor.White,
            BottomLight: ShaderColor.White,
            OuterMetal: ShaderColor.Black,
            InnerMetal: ShaderColor.Black,
        },
    },
]

export default DB;
