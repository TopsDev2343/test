import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Screens from '@/screens'
import Home from '@/screens/main/Home'
// import Menu from '@/screens/menu'
import headerConfig from '@/components/Header/headerConfig'
// import ReportRouting from '@/screens/reportRouting'

// import DeviceList from '@/screens/deviceInstalation/list'
// import DeviceProgressing from '@/screens/deviceInstalation/progressing'
// import DeviceRegister from '@/screens/deviceInstalation/register'


const Stack = createNativeStackNavigator()


const mainStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, headerBackTitle: '  ', headerBackVisible: '   ' }} >

            {/* <Stack.Screen name={Screens.MENU} component={Menu} options={{ title: '', ...headerConfig }} />
            <Stack.Screen name={Screens.REPORT_ROUTING} component={ReportRouting} options={{ title: '', ...headerConfig }} />

            <Stack.Screen name={Screens.DEVICE_INSTALATION_LIST} component={DeviceList} options={{ ...headerConfig, animation: 'slide_from_bottom', title: '', }} />
            <Stack.Screen name={Screens.DEVICE_INSTALATION_REGISTER} component={DeviceRegister} options={{ ...headerConfig, animation: 'slide_from_bottom', title: '', }} />
            <Stack.Screen name={Screens.DEVICE_INSTALATION_PROGRESSING} component={DeviceProgressing} options={{ ...headerConfig, animation: 'slide_from_bottom', title: '', }} /> */}
            <Stack.Screen name={Screens.HOME} component={Home} options={{ ...headerConfig, animation: 'slide_from_bottom', title: '', }} />
        </Stack.Navigator>
    )
}

export default mainStack

