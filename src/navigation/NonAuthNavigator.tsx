import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { DARKMODE_NAV_STACK } from '../constants/styles'
import Login from '../screens/AuthScreens/Login'
import MegaLogin from '../screens/AuthScreens/MegaLogin'

function NonAuthNavigator() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator initialRouteName='Login' screenOptions={{...DARKMODE_NAV_STACK}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Mega" component={MegaLogin}/>
        </Stack.Navigator>
    )
}

export default NonAuthNavigator