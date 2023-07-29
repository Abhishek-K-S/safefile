import React, { PropsWithChildren } from 'react'
import { View, ViewStyle } from 'react-native'
import { STYLES, VIEW_PADDING } from '../constants/styles'

type CustomViewProps = PropsWithChildren<{
    style?: ViewStyle
}>

function CustomView({children, style}: CustomViewProps): JSX.Element {
  return (
    <View style={[{padding: VIEW_PADDING}, style?style: {}]}>{children}</View>
  )
}

export default CustomView