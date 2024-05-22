import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { metrics, color } from '@/configs';
import { appStyle } from '@/theme';
import { IconButton } from '@/components/Icon'


const SearchInput = ({ value, placeholder = "search", onChangeText, onPressClose, ...rest }) => {
    return (
        <View style={styles.container}>
            <IconButton
                size={24}
                name="closeCircle"
                style={{ paddingHorizontal: metrics.p1 }}
                onPress={onPressClose}
            />
            <TextInput
                selectionColor={color.accent}
                value={value}
                style={styles.input}
                placeholder={placeholder}
                numberOfLines={1}
                placeholderTextColor={color.gray}
                onChangeText={onChangeText}
                {...rest} />
        </View >
    );
};


export default SearchInput;


const styles = StyleSheet.create({
    container: {
        height: 48,
        marginHorizontal: metrics.m4,
        paddingHorizontal: metrics.p1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.grey2,
        borderRadius: 24
    },
    input: {
        ...appStyle.text,
        flex: 1,
        marginEnd: metrics.m3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 0,
        marginVertical: 0,
    },
});
