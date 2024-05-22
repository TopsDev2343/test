import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { color, metrics } from '@/configs'
import { appStyle } from '@/theme'
import { fontFamily } from '@/theme/fontStyle'

export const SwitchButton = ({ title, onPress, isSelected, style = {}, textStyle = {}, ...props }) => {


    if (isSelected)
        return (
            <TouchableOpacity style={[switchStyles.container, style]}
                onPress={onPress}
                activeOpacity={0.7}>
                <Text style={[switchStyles.text, textStyle]}>{title}</Text>
            </TouchableOpacity>
        )
    return (
        <TouchableOpacity style={[switchStyles.container, { backgroundColor: color.grey2 }, style]}
            onPress={onPress}
            activeOpacity={0.7}>
            <Text style={[switchStyles.text, { color: color.silver }, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}


export default SwitchButton

export const switchStyles = StyleSheet.create({
    container: {
        backgroundColor: color.accent,
        borderRadius: 20,
        height: 40,
        minWidth: 70,
        paddingHorizontal: metrics.p2,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: metrics.m2,
        marginHorizontal: metrics.m1,
        borderColor: color.accent,
        borderWidth: metrics.bw1
    },
    text: {
        ...appStyle.text,
        color: color.white,
        fontFamily: fontFamily.Regular,
        fontWeight: '400'
    }

})
