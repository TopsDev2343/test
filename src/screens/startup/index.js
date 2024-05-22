import { StatusBar, StyleSheet, View, Text, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { appStyle } from '@/theme'
import { color } from '@/configs'
import { getAppVersion } from '@/utils'
import { useDispatch, useSelector } from 'react-redux'
import { IosButton } from '@/components/Button'
import { getProfile } from '@/store/authSlice'
import { AppName } from '@/configs'

const startup = () => {

    const dispatch = useDispatch()
    const { startup } = useSelector(state => state.auth);
    const [error, setError] = useState(false)

    const getSplash = async () => {
        try {
            setError(null)
            await dispatch(getProfile())
        } catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            getSplash()
        }, 1000);
    }, [startup])

    useLayoutEffect(() => {
        StatusBar.setHidden(true)
        return () => {
            StatusBar.setHidden(false)
        };
    }, [])

    return (

        <View style={[appStyle.centerContiner]}>
            <>
                <Image source={require('@/assets/icons/logo.png')} resizeMode='center' style={{ width: 250, height: 250, overflow: 'hidden' }} />
                <Text style={[appStyle.typoGraphy]}>{AppName}</Text>
            </>
            <View style={[appStyle.center, { position: 'absolute', bottom: 60 }]}>

                {
                    error ?
                        <IosButton title={"try again"} style={{ color: color.white }} onPress={getSplash} />
                        :
                        <>
                            <Text style={appStyle.text}>version {getAppVersion()}</Text>
                        </>
                }
            </View>
        </View>
    )
}

export default startup

const styles = StyleSheet.create({})