import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon, { IconButton } from '@/components/Icon'
import { appStyle } from '@/theme'
import { color, metrics } from '@/configs'
import { useDispatch, useSelector } from 'react-redux'
import { showModal } from '@/store/modalSlice'
import DevicesModal from './DevicesModal'
import Screens from '@/screens'
import ModeModal from '../modal/ModeModal'


export default function Header() {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const mode = useSelector(state => state.mode.mode)
    const currentDevice = useSelector(state => state.devices.currentDevice)

    const showDevices = () => {
        dispatch(showModal({
            component: () => <DevicesModal navigation={navigation} />
        }))
    }

    return (
        <View style={styles.header} >
            <IconButton
                style={styles.iconButton}
                size={35}
                name={mode?.icon}
                stroke={color.white}
                color={color.cardBackground}
                onPress={() => {
                    dispatch(showModal({
                        component: () => <ModeModal navigation={navigation} />
                    }))

                }}
            />
            <Pressable
                onPress={showDevices}
                style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: color.cardBackground, marginHorizontal: metrics.s16, borderRadius: metrics.s16, paddingHorizontal: metrics.s8 }}>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginRight: metrics.s8 }}>
                    <Icon
                        style={styles.iconButton}
                        size={25}
                        stroke={color.white}
                        name='arrowLeft'
                        color={color.cardBackground}
                    />
                    <Text style={appStyle.text}>{currentDevice?.name}</Text>
                </View>
                <View style={appStyle.space} />
            </Pressable>

            <IconButton
                style={styles.iconButton}
                size={35}
                name='gear'
                // stroke={color.white}
                color={color.white}
                onPress={() => { navigation.navigate(Screens.MENU) }}

            />
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        padding: metrics.s16
    },
    iconButton: {
        width: 50,
        height: 50,
        backgroundColor: color.cardBackground,
        borderRadius: metrics.s16
    }
})