import { textStyles } from "./textStyles";
import { colors } from "./colors";
import { spacing } from "./spacing";

export const theme = {
    colors,
    textStyles,
    spacing
};

export type Theme = typeof theme;
