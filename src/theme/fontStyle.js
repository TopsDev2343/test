import { Platform, StyleSheet } from 'react-native'
import { color } from '@/configs'

export const fontFamily = {
    Black: 'Myfont-Black',
    Bold: 'Myfont-Bold',
    ExtraLight: 'Myfont-ExtraLight',
    Light: 'Myfont-Light',
    Medium: 'Myfont-Medium',
    Regular: 'Myfont-Regular',
    SemiBold: 'Myfont-SemiBold',
    Thin: 'Myfont-Thin',
}

export default fontStyle = StyleSheet.create({
    typoGraphy: {
        fontSize: 45,
        color: color.textColor,
        fontFamily: fontFamily.Bold,
    },
    textJustify: Platform.OS == 'ios' ?
        {
            textAlign: 'justify',
            writingDirection: 'left'
        }
        :
        {

        },

    bold: {
        fontFamily: fontFamily.Bold,
        fontWeight: '600'
    },

    title: {
        fontSize: 18,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        fontWeight: '600',
    },
    titleBlack: {
        fontSize: 18,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        fontWeight: '600',
    },

    text2Xs: {
        fontSize: 10,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        textAlign: 'right'
    },
    textXs: {
        fontSize: 12,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        textAlign: 'right'
    },
    textSm: {
        fontSize: 14,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        textAlign: 'right'
    },
    text: {
        fontSize: 16,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        fontWeight: '400',
        textAlign: 'right'
    },
    textLg: {
        fontSize: 18,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        textAlign: 'right'
    },
    textXl: {
        fontSize: 20,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        textAlign: 'right'
    },
    text2xl: {
        fontSize: 22,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        textAlign: 'right'
    },
    text3xl: {
        fontSize: 24,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        textAlign: 'right'
    },
    text9xl: {
        fontSize: 36,
        color: color.textColor,
        fontFamily: fontFamily.Regular,
        textAlign: 'right'
    }
})