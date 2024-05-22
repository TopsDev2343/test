import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { color, metrics } from '@/configs'
import { appStyle } from '@/theme'
import { fontFamily } from '@/theme/fontStyle'


export const Radio = ({ title, onPress, isSelected, style = {}, textStyle = {}, ...props }) => {

    if (isSelected)
        return (
            <TouchableOpacity style={[styles.container, style]}
                onPress={onPress}
                activeOpacity={0.7}>
                <Text style={[appStyle.text, { flexGrow: 1 }]}>{title}</Text>
                <View style={[styles.badge]} >
                    <View style={styles.enable} />
                </View>

            </TouchableOpacity>
        )
    return (
        <TouchableOpacity style={[styles.container, style]}
            onPress={onPress}
            activeOpacity={0.7}>
            <Text style={[appStyle.text, { flexGrow: 1 }]}>{title}</Text>
            <View style={styles.badge} />

        </TouchableOpacity>
    )
}


export default Radio

const styles = StyleSheet.create({
    container: {
        padding: metrics.p4,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: metrics.s4,
        borderRadius: metrics.s8,
        width: '100%',
        backgroundColor: color.cardBackground,
    },
    text: {
        ...appStyle.text,
        fontFamily: fontFamily.Regular,
        fontWeight: '400'
    },
    badge: {
        width: 24, height: 24,
        borderRadius: 12,
        borderColor: color.accent,
        borderWidth: 1,
        marginLeft: metrics.s8,
    },
    enable: {
        position: 'absolute',
        top: 3,
        left: 3,
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: color.accent
    }


})
