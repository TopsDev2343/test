import { Appearance } from "react-native";

const isDark = true// Appearance.getColorScheme() == 'dark'

const color = {

    accent: '#FEBB1B',

    primary: '#FEBB1B',
    primaryDark: '#FEBB1B',

    backgroundScreen: isDark ? '#181A21' : '#FEFEFE',
    cardBackground: isDark ? '#20222A' : '#FAFAFA',
    textColor: isDark ? "#ffffff" : '#222222',

    blue: '#68BCFC',
    blueDark: '#5FABE5',
    orangyRed: '#FF5545',
    grey1: '#F6F6F6',
    grey2: '#EEF1F4',
    grey3: '#BBBDBF',
    dark: '#222222',
    silver: 'rgba(34, 34, 34, 0.5)',
    greenDark: '#6CC164',
    greenLight: '#CDECA8',
    yellowLight: 'rgba(255, 197, 32, 0.4)',
    yellow: 'rgba(255, 197, 32, 1)',
    orange: '#FFC520',
    Purple: '#8871FC',
    pink: '#F72585',


    transparent: 'rgba(0,0,0,0)',
    transparentBlack: 'rgba(0,0,0, 0.6)',
    transparentWhite: 'rgba(256,256,256, 0.7)',
    transparentBlackHard: 'rgba(0,0,0, 0.9)',

    black: '#000000',
    white: '#ffffff',

}
export default color;