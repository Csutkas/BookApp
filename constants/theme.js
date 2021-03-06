import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

/* Global colors */
export const COLORS = {
        
    green: "#66D59A",
    lightGreen: "#E6FEF0",

    orange: "#FFA93A",

    blue: "#1A669F",
    lightBlue: "#C8DAE8",

    lime: "#00BA63",
    emerald: "#2BC978",

    red: "#e60000",
    lightRed: "#FFF1F0",

    purple: "#6B3CE9",
    lightPurple: "#F3EFFF",

    yellow: "#FFC664",
    lightYellow: "#FFF9EC",

    black: "#1E1F20",
    white: "#FFFFFF",
    smokeWhite: "E8E8E8",

    lightGray: "#E0E0E0",
    mediumLightGray: "#333333",
    mediumGray: "#383838",
    darkgray: "#111111",
    gray: "#666",

    turquoise: "#83d4d5",
    darkTurquoise: "#365657",

    transparent: "transparent",
};

/* Global sizes */
export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 30,
    padding: 10,
    padding2: 12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 20,
    h4: 18,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,
    body5: 12,

    // app dimensions
    width,
    height
};

/* Global fonts */
export const FONTS = {
    largeTitle: { fontFamily: "System", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "System", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "System", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "System", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "System", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "System", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "System", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "System", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "System", fontSize: SIZES.body4, lineHeight: 22 },
    body5: { fontFamily: "System", fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;