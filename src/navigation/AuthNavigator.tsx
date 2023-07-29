import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"

import HomeScreen from '../screens/HomeScreen'
import { DARKMODE_NAV_STACK } from '../constants/styles'

function AuthNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={DARKMODE_NAV_STACK} >
            <Stack.Screen name='Home' component={HomeScreen}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator