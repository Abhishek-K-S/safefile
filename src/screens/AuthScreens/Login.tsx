import { StackNavigationProp } from '@react-navigation/stack'
import React, { PropsWithChildren } from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native'
import CustomText from '../../components/CustomText'
import { HEADER_SIZE, STYLES } from '../../constants/styles'


type RootStackParamList = {
  Mega: undefined;
};

type MegaLoginScreenNavigator = StackNavigationProp<RootStackParamList>;

type HomeScreenProps = {
  navigation: MegaLoginScreenNavigator;
};

function Login({navigation}: PropsWithChildren<HomeScreenProps>): JSX.Element {

  const handleRedirect = (dir:string)=>{
    navigation.navigate('Mega')
  }

  return (
    <View style={style.container}>
      <View>
        <CustomText style={style.headerText}>Welcome to  S A F E   F I L E</CustomText>
      </View>
        <TouchableOpacity style={style.loginButton} onPress={()=>handleRedirect('Mega')}>
            <Image style={style.logo} source={require('../../assets/megaCircle.png')}/>
            <Text style={[STYLES.HEADER_STYLE, {fontSize: 20}]}>Login with MEGA</Text>
        </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    loginButton: {
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 10,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30
    },
    logo: {
        width: 50,
        height: 50
    },
    container: {
      flex:1, 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: "column",
      gap: 50
    }, 
    headerText: {
      fontSize: HEADER_SIZE
    }
})

export default Login