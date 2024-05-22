import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { appStyle } from '@/theme'
import { AppName } from '@/configs'
import KeyboardAware from '@/containers/KeyboardAware'

const Layout = ({ navigation, children, }) => {
    return (
        <KeyboardAware style={appStyle.continer} >
            <View style={[appStyle.centerContiner, appStyle.continer]}>
                <Image source={require('@/assets/icons/logo.png')} resizeMode='center' style={{ width: 250, height: 250, overflow: 'hidden' }} />
                <Text style={[appStyle.typoGraphy, { marginBottom: 32 }]}>{AppName}</Text>
                {children}
            </View>
        </KeyboardAware>
    )
}

export default Layout
const styles = StyleSheet.create({
})

