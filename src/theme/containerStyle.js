import { StyleSheet } from 'react-native'
import { color, metrics } from '@/configs'


export default containerStyle = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: color.backgroundScreen,
        flexDirection: 'column'
    },
    content: {
        flex: 1,
        paddingHorizontal: metrics.s16,
        flexDirection: 'column'
    },
    centerContiner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.backgroundScreen
    },
    centerVertical: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: color.backgroundScreen
    },
    centerHorizontal: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: color.backgroundScreen
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgrounWhite: {
        backgroundColor: color.white,
    },
    row: {
        flexDirection: 'row',
    },
    alignCenter:
        { alignItems: 'center' }
})