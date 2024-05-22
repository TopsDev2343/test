import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intrudoction from '@/screens/intrudoction'
import Screens from '@/screens';
import Signup from '@/screens/auth/signup'
// import Otp from '@/screens/auth/otp'
// import CreateProfile from '@/screens/auth/createProfile'
// import DeviceList from '@/screens/deviceInstalation/list'
// import DeviceProgressing from '@/screens/deviceInstalation/progressing'
// import DeviceRegister from '@/screens/deviceInstalation/register'
// import headerConfig from '@/components/Header/headerConfig'
import Signin from '@/screens/auth/signin';
// import resetpass from '@/screens/auth/resetpass';

const AuthNavigator = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={Screens.INTRUDOCTION} component={Intrudoction} />
            <Stack.Screen name={Screens.SIGNUP} component={Signup} options={{ animation: 'fade' }} />

            <Stack.Screen name={Screens.SIGNIN} component={Signin} options={{ animation: 'fade' }} />
            {/* <Stack.Screen name={Screens.RESET_PASS} component={resetpass} options={{ animation: 'fade' }} />
            <Stack.Screen name={Screens.OTP} component={Otp} options={{ animation: 'slide_from_bottom' }} />
            <Stack.Screen name={Screens.CREATE_PROFILE} component={CreateProfile} options={{ animation: 'fade' }} />

            <Stack.Screen name={Screens.DEVICE_INSTALATION_LIST} component={DeviceList} options={{ ...headerConfig, animation: 'slide_from_bottom', title: 'new book', }} />
            <Stack.Screen name={Screens.DEVICE_INSTALATION_REGISTER} component={DeviceRegister} options={{ ...headerConfig, animation: 'slide_from_bottom', title: 'new book', }} />
            <Stack.Screen name={Screens.DEVICE_INSTALATION_PROGRESSING} component={DeviceProgressing} options={{ ...headerConfig, animation: 'slide_from_bottom', title: 'new book', }} />  */}
        </Stack.Navigator>
    );
};

export default AuthNavigator;
