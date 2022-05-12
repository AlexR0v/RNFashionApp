import React, { FC }                                from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface UiButtonProps {
  variant: 'default' | 'primary'
  label: string
  onPress: () => void
}

const UiButton: FC<UiButtonProps> = ({ label, variant, onPress }) => {

  const backgroundColor = variant === 'primary' ? '#2cb2b0' : 'rgba(12, 13, 52, 0.05)'
  const color = variant === 'primary' ? '#ffffff' : '#0c0d34'

  return (
    <Pressable {...{ onPress }}>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={[styles.label, { color }]}>{label}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 245,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {
    fontSize: 15,
    fontFamily: 'SFProText-Regular'
  }
})

UiButton.defaultProps = { variant: 'default' }

export default UiButton

