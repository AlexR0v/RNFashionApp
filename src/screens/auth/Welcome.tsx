import React, { FC }  from 'react'
import { Text, View } from 'react-native'

interface WelcomeProps {

}

const Welcome: FC<WelcomeProps> = () => {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  )
}

export default Welcome

