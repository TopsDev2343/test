import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { color, metrics } from '@/configs'
import { appStyle } from '@/theme'

export const IosButton = ({ title, onPress, disabled = false, style = {}, containerstyle = {}, ...rest }) => {

    return (
        <TouchableOpacity disabled={disabled} style={[styles.ios, containerstyle, { opacity: disabled ? 0.5 : 1 }]}
            onPress={onPress}
            activeOpacity={0.7} props>
            <Text style={[appStyle.iosButton, style]} {...rest} >{title}</Text>
        </TouchableOpacity>
    )
}

export const IosTextButton = ({ title, text, onPress, disabled = false, style = { color: color.accent }, isUnderlin = false, containerstyle = {}, ...rest }) => {
    return (
        <View style={styles.goto}>
            <Text style={appStyle.textSm}>{text}</Text>
            <IosButton disabled={disabled} onPress={onPress} title={title} style={[appStyle.textSm, style,]} containerstyle={[containerstyle, isUnderlin ? { ...styles.buttomLine, borderColor: style.color } : {}]} {...rest} />

        </View>
    )
}

export default IosButton

const styles = StyleSheet.create({
    ios: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: metrics.p2
    },
    goto: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    buttomLine: {
        borderBottomWidth: metrics.bw2,
        borderColor: color.accent,
        padding: 0,

    }

})
