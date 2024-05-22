import React from 'react'
import { View } from 'react-native'
import { appStyle } from '@/theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { SafeAreaView } from 'react-native-safe-area-context'
const KeyboardAware = ({ navigation, children, style = {} }) => {
    return (
        <SafeAreaView style={[appStyle.continer, style]}>
            <KeyboardAwareScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                enableOnAndroid={true}
                enableAutomaticScroll={false}>
                {children}
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default KeyboardAware

