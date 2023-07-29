import React, { PropsWithChildren } from 'react'
import { Text } from 'react-native'
import { STYLES } from '../constants/styles'

type CustomTextProps = PropsWithChildren<{
    style?: any
}>

function CustomText({children, style}: CustomTextProps): JSX.Element {
  return (
    <Text style={[STYLES.CONTENT_STYLE, style?style:{}]}>{children}</Text>
  )
}

export default CustomText