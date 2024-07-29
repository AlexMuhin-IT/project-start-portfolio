import {theme} from "./Theme";

type FontPropsType = {
    family?: string
    // size?: number
    weight?: number
    color?: string
    lineHeight?: number
    Fmax?: number
    Fmin?: number
}

export const font = ({family, weight, color, lineHeight, Fmax, Fmin}: FontPropsType) => `
    font-family: ${family || 'Poppins'};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.primaryBg};
    line-height:${lineHeight || 1.2};
    font-size: calc( (100vw - 480px)/(1580 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`