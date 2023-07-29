import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { STYLES } from '../constants/styles'

function LoadingScreen() {
  return (
    <View style={style.centerItem}>
        <Text style={[STYLES.HEADER_STYLE, {fontWeight: "700", fontSize: 30}]}>S A F E F I L E</Text>
    </View>
  )
}

const style = StyleSheet.create({
    centerItem: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "center"
    }
})

export default LoadingScreen