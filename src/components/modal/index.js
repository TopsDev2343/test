
import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as modalActions from '@/store/modalSlice'
import { color, metrics } from '@/configs'


const Modal = ({ children, cardStyle, ...rest }) => {
    return (
        <SafeAreaView>
            <View style={[styles.card, cardStyle]}>
                {
                    children
                }
            </View>
        </SafeAreaView>)
}

export default Modal


const styles = StyleSheet.create({
    card: {
        width: '85%',
        backgroundColor: color.white,
        borderRadius: metrics.br5,
        padding: metrics.p4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
})
