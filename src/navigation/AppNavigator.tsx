import { NavigationContainer } from '@react-navigation/native'

import React from 'react'
import AuthNavigator from './AuthNavigator'
import NonAuthNavigator from './NonAuthNavigator'
import { RootState } from '../store/store'
import { useSelector } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContent from '../components/CustomDrawerContent'
import { DARKMODE_NAV_DRAWER } from '../constants/styles'

const Drawer = createDrawerNavigator()


function AppNavigator(): JSX.Element {
    const authStatus = useSelector((state:RootState) => state.auth.authorized)

    return (
        <NavigationContainer>
            {
                authStatus?
                    <Drawer.Navigator 
                        initialRouteName='MainScreen' 
                        useLegacyImplementation={false} 
                        drawerContent={(props)=><CustomDrawerContent />}
                        screenOptions={{...DARKMODE_NAV_DRAWER, drawerType: 'back'}}
                    >
                        <Drawer.Screen name='S A F E   F I L E' component={AuthNavigator} />
                    </Drawer.Navigator>
                    :
                    <NonAuthNavigator/>}
        </NavigationContainer>
    )
}

export default AppNavigator