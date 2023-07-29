import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { STYLES } from '../constants/styles'
import CustomView from './CustomView'

function GoBackButton() {
    const navigation = useNavigation()
  return (
    <CustomView style={{height: 50, padding: 15}}>
        <Text onPress={()=>navigation.goBack()} style={[STYLES.CONTENT_STYLE,{color:'#f1f1f1' ,fontWeight: '600', lineHeight: 20, width: 80}]}>{'< '} Back</Text>
    </CustomView>
  )
}

export default GoBackButton