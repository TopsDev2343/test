import React, { useEffect } from 'react'
import { StatusBar, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Toast from 'react-native-toast-message';
import Modal from 'react-native-modal';
import AppNavigator from '@/navigations/appNavigator'
import { useDispatch, useSelector, } from 'react-redux'
import { clearModal, dismisModal, dismisToast } from '@/store/modalSlice';
import { color } from '@/configs';
import { SafeAreaView } from 'react-native-safe-area-context';
import RemoteConfig from '@/components/RemoteConfig'
// import SmsListener from '@/components/SmsListener';


const index = () => {

    const dispatch = useDispatch()
    const {
        showToast,
        showModal,
        message,
        component,
        config } = useSelector(state => state.modal)


    useEffect(() => {
        if (showToast)
            Toast.show({
                text1: message, type: 'error', position: 'top', onHide: () => {
                    dispatch(dismisToast())
                }
            });
    }, [message, showToast]);


    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={color.backgroundScreen} />
            <Modal
                isVisible={showModal}
                style={styles.mdoal}
                onDismiss={() => dispatch(clearModal())}
                customBackdrop={
                    <TouchableWithoutFeedback onPress={() => {
                        if (config?.isForce)
                            return
                        dispatch(dismisModal())
                    }}>
                        <SafeAreaView style={{ flex: 1, backgroundColor: color.transparentBlackHard }} />
                    </TouchableWithoutFeedback>}
                {...config}
            >
                {component != null && component()}
            </Modal>
            <AppNavigator />
            <RemoteConfig />
            <Toast position='bottom' />

        </>
    )
}

export default index

const styles = StyleSheet.create({
    mdoal: { margin: 0, }
})
