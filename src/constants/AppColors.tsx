import { Appearance } from "react-native";

//colors common to both themes
export const appColors = {
    grey: '#878585',
    lightGrey: '#F1F1F1',
    transparentGrey: Appearance.getColorScheme() === "dark" ? 'rgba(155, 155, 255, 0.65)' : 'rgba(155, 155, 255, 0.3)',
    darkGrey: '#5D5D99',
    black: '#101121',
    fadedWhite: 'rgba(255, 255, 255, 1)',
    white: '#FFFFFF',
    green: '#DFF78F'
}