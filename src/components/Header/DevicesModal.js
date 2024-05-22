import { Button, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { color, metrics } from '@/configs'
import { LoadingButton } from '@/components/Button';
import Icon, { IconButton } from '../Icon';
import appStyle from '@/theme';
import { useDispatch, useSelector } from 'react-redux';
import { dismisModal } from '@/store/modalSlice';
import Screens from '@/screens';

export default function DevicesModal({ navigation }) {
    // const user  = useSelector(state=>state.user)
    const dispatch = useDispatch()
    const close = () => { dispatch(dismisModal()) }
    const devices = useSelector(selectAlldevices)
    const currentDevice = useSelector(state => state.devices.currentDevice)

    const onPressDevices = (device) => {
        try {
            dispatch(changeDevice({ device }))
            dispatch(dismisModal())
        } catch (error) {

        }
    }


    return (
        <View style={styles.modalContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <LoadingButton
                    style={{ flex: 1, }}
                    title="new book"
                    onPress={() => {
                        close()
                        setTimeout(() => {
                            navigation.navigate({ name: Screens.DEVICE_INSTALATION_LIST })
                        }, 500);
                    }} />
                <View style={appStyle.padding} />
                <IconButton
                    style={styles.iconButton}
                    size={35}
                    name='close'
                    stroke={color.orangyRed}
                    color={color.cardBackground}
                    onPress={close}
                />



            </View>
            <ScrollView>
                {
                    devices.map(device => {
                        return (
                            <Pressable onPress={() => { onPressDevices(device) }} key={device.id} style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: color.cardBackground, padding: metrics.s16, borderRadius: metrics.s16, marginTop: metrics.s8 }}>
                                <IconButton
                                    style={{}}
                                    size={25}
                                    stroke={color.white}
                                    name='edit'
                                    color={color.cardBackground}
                                />
                                <Text style={[appStyle.text, { flex: 1, marginHorizontal: metrics.s8 }]}>{device?.name}</Text>
                                <View
                                    style={{ width: 24, height: 24, borderRadius: 12, borderColor: color.accent, borderWidth: 1 }}>
                                    {currentDevice?.id == device?.id && <View
                                        style={{ position: 'absolute', top: 3, left: 3, width: 16, height: 16, borderRadius: 8, backgroundColor: color.accent }}>
                                    </View>}
                                </View>
                            </Pressable>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        position: 'absolute',
        flex: 1,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '75%',
        borderTopLeftRadius: metrics.s16,
        borderTopRightRadius: metrics.s16,
        backgroundColor: color.backgroundScreen,
        overflow: 'hidden',
        padding: metrics.s16
    },
    iconButton: {
        width: 50,
        height: 50,
        backgroundColor: color.cardBackground,
        borderRadius: metrics.s16
    }
});
