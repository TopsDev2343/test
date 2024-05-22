import { Platform, StyleSheet } from 'react-native'
import { metrics, color } from '@/configs'
import fontStyle, { fontFamily } from './fontStyle'
import containerStyle from './containerStyle'

export const appStyle = StyleSheet.create({
    ...containerStyle,
    ...fontStyle,
    screenPadding: { padding: 35 },
    iosButton: {
        color: color.accent,
        fontSize: 18,
        fontFamily: fontFamily.Regular,
        fontWeight: '400',
        textAlign: 'right'
    },

    space: {
        alignSelf: 'center',
        marginVertical: metrics.m4
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: color.backgroundScreen
    },
    margin: {
        margin: metrics.m2
    },
    padding: {
        padding: metrics.p2
    },
    cardRow: {
        backgroundColor: color.white,
        borderRadius: 24,
        width: '90%',
        marginVertical: metrics.m2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 88,
        paddingHorizontal: metrics.p4
    },
    card: {
        backgroundColor: color.white,
        borderRadius: 24,
        width: '90%',
        marginVertical: metrics.m2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardGrey: {
        backgroundColor: color.grey1,
        borderRadius: 24,
        width: '90%',
        marginVertical: metrics.m2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    seprator: {
        width: '90%',
        alignSelf: 'center',
        height: 1,
        backgroundColor: color.primary
    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 1,
    }

})
export default appStyle
