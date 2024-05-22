import React from 'react'
import { StyleSheet, TouchableOpacity, ActivityIndicator, Text } from 'react-native'
import { color, metrics } from '@/configs'
import { appStyle } from '@/theme'

export const LoadingButton = ({ title, onPress, isLoading, disabled, style = {}, isSolid = false, textStyle = { color: color.white }, ...props }) => {

    if (isSolid)
        return (
            <TouchableOpacity disabled={disabled} style={[styles.containerSolid, style, disabled ? { opacity: 0.7 } : { opacity: 1 }]}
                onPress={onPress}
                activeOpacity={0.7}>
                <Text style={[appStyle.title, textStyle]}>{title}</Text>
                {isLoading && <ActivityIndicator style={styles.loading} color={color.accent} />}
            </TouchableOpacity>
        )
    else
        return (
            <TouchableOpacity disabled={disabled} style={[styles.container, style, disabled ? { opacity: 0.7 } : { opacity: 1 }]}
                onPress={onPress}
                activeOpacity={0.7}>
                <Text style={[appStyle.title, textStyle]}>{title}</Text>
                {isLoading && <ActivityIndicator style={styles.loading} color={color.accent} />}
            </TouchableOpacity>
        )
}
export const SolidButton = ({ title, onPress, isLoading, disabled, style = {}, ...props }) => {
    return (
        <TouchableOpacity disabled={disabled} style={[styles.container, style, disabled ? { opacity: 0.7 } : { opacity: 1 }]}
            onPress={onPress}
            activeOpacity={0.7}>
            <Text style={appStyle.title}>{title}</Text>
            {isLoading && <ActivityIndicator style={styles.loading} color={color.accent} />}
        </TouchableOpacity>
    )
}

export default LoadingButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.accent,
        borderRadius: metrics.defaultBorder,
        height: metrics.inputHeight,
        justifyContent: 'center',
        alignItems: 'center',

        marginVertical: metrics.m2
    },
    containerSolid: {
        borderColor: color.accent,
        borderWidth: metrics.bw2,
        borderRadius: metrics.defaultBorder,
        height: metrics.inputHeight,
        justifyContent: 'center',
        alignItems: 'center',

        marginVertical: metrics.m2
    },

    loading: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        borderRadius: metrics.defaultBorder,
        backgroundColor: color.transparentWhite
    },


})
