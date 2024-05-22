import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { TabView } from 'react-native-tab-view';
import { appStyle } from '@/theme';
import { Page, Login, Steper } from './components'
import { color, metrics } from '@/configs';
import { contents } from './contents';


export default function () {
    const [index, setIndex] = useState(0);

    return (
        <SafeAreaView style={appStyle.continer}>
            <TabView
                style={appStyle.continer}
                navigationState={{ index, routes: contents }}
                renderScene={({ route }) => Page(route)}
                onIndexChange={setIndex}
                renderTabBar={() => null}
            />
            <View style={[styles.bottom]}>
                {index == contents.length - 1 ? Login() : Steper({ index, setIndex })}
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    bottom: {
        height: 16 + 1 * metrics.inputHeight,
        width: metrics.contentWidth,
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom: metrics.m4,
        alignSelf: 'center'
    }
})