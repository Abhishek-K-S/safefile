import React, { PropsWithChildren } from 'react'
import { TouchableOpacity, Text, View, Image, StyleSheet, Dimensions } from 'react-native'
import { useDispatch } from 'react-redux'
import { logoutSuccess } from '../store/authReducer'
import CustomText from './CustomText'
import { useDrawerStatus } from '@react-navigation/drawer'

function CustomDrawerContent(): JSX.Element {
    const isDrawerOpen = useDrawerStatus() == 'open'
    const drawerWidth = Dimensions.get('window').width
    const dispatch = useDispatch()

    const handleLogout = (): void =>{
        dispatch(logoutSuccess())
    }

    return (
        <>
            <View style={style.logoContainer}>
                <Image style={style.logo} source={require('../assets/logo.jpeg')}/>
            </View>
            <CustomButton onPress={handleLogout} text="Logout"/>
        </>
    )
}

const style = StyleSheet.create({
    logoContainer: {
        backgroundColor: 'white',
        height: '20%',
      },
      logo: {
        width: '100%', 
        height: '100%', 
      },
      customButton: {
        height: 60,
        padding: 20,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: 'grey',
      }
})

export default CustomDrawerContent

function CustomButton({onPress, text}: PropsWithChildren<{onPress: ()=>void, text: string}>): JSX.Element {
    return (
        <TouchableOpacity onPress={onPress} style={style.customButton}>
            <CustomText style={{lineHeight: 20}}>{text}</CustomText>
        </TouchableOpacity>
    )
}