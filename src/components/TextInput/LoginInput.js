import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { metrics, color } from '@/configs';
import { appStyle } from '@/theme';
import Icon from '@/components/Icon'


const loginInput = ({ value, placeholder, lable, errorMessage, onChangeText, secureTextEntry, onBlur, inputStyle = {}, keyboardType, textAlign = "right", ...rest }) => {
    const status = value?.length > 0 ? errorMessage ? 'error' : 'success' : 'default'
    const styleStatus = {
        success: styles.success,
        error: styles.error,
        default: {}
    }

    return (
        <View style={styles.container}>
            {lable != "" && <Text style={styles.lable}>{lable}</Text>}
            <View style={[styles.inputContainer, styleStatus[status]]}>
                {status == 'error' && textAlign == "right" && <Icon size={18} name="info" />}
                <TextInput
                    selectionColor={color.accent}
                    value={value}
                    style={[styles.input, inputStyle]}
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    numberOfLines={1}
                    placeholderTextColor={color.gray}
                    onChangeText={onChangeText}
                    keyboardType={keyboardType}
                    textAlign={textAlign}
                    {...rest} />
                {status == 'error' && textAlign != "right" && <Icon size={18} name="info" />}
            </View>
        </View >
    );
};


export default loginInput;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginTop: metrics.m4
    },
    lable: {
        ...appStyle.text,
        marginBottom: metrics.m1
    },
    inputContainer: {
        height: metrics.inputHeight,
        flexDirection: 'row',
        width: '100%',
        borderRadius: metrics.defaultBorder,
        paddingHorizontal: metrics.p5,
        backgroundColor: color.cardBackground,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        ...appStyle.text,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 0,
        marginVertical: 0,
        textAlign: 'center'
    },
    success: {
        borderColor: color.accent,
        borderWidth: metrics.bw2,
    },
    error: {
        borderColor: color.orangyRed,
        borderWidth: metrics.bw2,
    },

});
