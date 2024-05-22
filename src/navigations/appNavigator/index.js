import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from '@/navigations/authNavigator'
import MainNavigator from '@/navigations/mainNavigator'
import StartupScreen from '@/screens/startup'


const AppNavigator = () => {

    const { startup, authenticating, authenticated } = useSelector(state => state.auth);

    return (
        <NavigationContainer >
            {/* {startup && <StartupScreen />}
            {authenticating && <AuthNavigator />}
            {authenticated && <MainNavigator />} */}
            <MainNavigator />
        </NavigationContainer>
    );
};

export default AppNavigator;
