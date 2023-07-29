import React from 'react'
import {Image, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import { useDispatch } from 'react-redux'
import CustomText from '../../components/CustomText'
import GoBackButton from '../../components/GoBackButton'
import { BACKGROUND_COLOR, CONTENT_COLOR, CONTENT_SIZE, HEADER_SIZE } from '../../constants/styles'
import { loginSuccess } from '../../store/authReducer'

function MegaLogin(): JSX.Element {

    const dispatch = useDispatch()

    const handleLogin = () =>{
        dispatch(loginSuccess({token:"fuck", platform: "pussy"}))
    }

    return (
        <>
            <GoBackButton/>
            <View style={style.container}>
                <Image style={style.logo} source={require('../../assets/megaCircle.png')}/>
                <Text style={style.bigTxt}>Login with MEGA</Text>
                <View style={style.subContainer}>
                    <CustomText>Username:</CustomText>
                    <TextInput style={style.inputfield} placeholder="e.g: abc@yz.com"/>

                    <CustomText style={{marginTop: 15}}>Password:</CustomText>
                    <TextInput secureTextEntry style={style.inputfield} placeholder="********"/>
                    <View style={style.buttonCenter}>
                        <TouchableOpacity style={style.loginButton} onPress={handleLogin}>
                            <Text style={style.whiteText} >Login with MEGA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 10
    },
    logo: {
        height: 100,
        width: 100,
    },
    bigTxt: {
        color: CONTENT_COLOR,
        fontSize: HEADER_SIZE
    },
    inputfield:{
        backgroundColor: CONTENT_COLOR,
        borderRadius: 10,
        padding: 10,
        fontSize: CONTENT_SIZE
    },
    subContainer: {
        width: '90%',
        marginTop: 30,
        gap: 10
    },
    loginButton:{
        backgroundColor: 'red',
        padding: 15,
        maxWidth: '50%',
        alignItems:'center',
        borderRadius: 10
    },
    buttonCenter:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30
    },
    whiteText:{
        fontSize: 18,
        fontWeight: '600',
        color: '#fff1f1'

    }


})

export default MegaLogin