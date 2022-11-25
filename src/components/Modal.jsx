
import { View, Text } from "react-native"

export const Modal = ({ header, body, footer,children }) => {
  return (
    <View>
      <View>
        <Text>{header}</Text>
        <View>{children}</View>
        <View>{footer}</View>
      </View>
    </View>
  )
}
