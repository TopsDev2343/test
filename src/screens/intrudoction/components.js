import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { appStyle } from '@/theme'
import { color, metrics } from '@/configs'
import { IosButton, LoadingButton } from '@/components/Button'
import { useNavigation } from '@react-navigation/native'
import Screens from '@/screens'
import { contents } from './contents'


export const Page = ({ icon, title, description, key }) => {


    return (
        <View key={key} style={[appStyle.centerContiner, { marginHorizontal: 35 }]} >
            <Image source={icon} resizeMode='center' style={{ width: 250, height: 250, overflow: 'hidden' }} />
            <Text style={[appStyle.text9xl, appStyle.bold, { marginVertical: metrics.m4 }]}>{title}</Text>
            <Text style={[appStyle.text, appStyle.textJustify]}>{description}</Text>
        </View>
    )
}

const Ponit = (id) => <View key={id} style={[styles.point, { opacity: 0.5, }]} />
const Line = (id) => <View key={id} style={[styles.point, { width: 32 }]} />

export const Steper = ({ index, setIndex }) => {
    return (
        <View style={[appStyle.centerContiner]}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                {
                    contents.map((_, id) => id == index ? Line(id) : Ponit(id))
                }
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: "center", }}>
                {/* <IosButton disabled onPress={() => setIndex(3)} title="next" /> */}
                {/* <IconButton name="right" size={20} onPress={() => setIndex((i) => i + 1)} /> */}
            </View>
        </View>
    )
}

export const Login = () => {
    const navigation = useNavigation()
    return (<LoadingButton onPress={() => navigation.navigate(Screens.SIGNUP)} title={"next"} />)
}

const styles = StyleSheet.create({
    point: {
        width: metrics.m2,
        height: metrics.m2,
        backgroundColor: color.primary,
        marginHorizontal: metrics.m1,
        borderRadius: metrics.br1
    }
})

