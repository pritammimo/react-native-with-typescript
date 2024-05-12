import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from '@/constants/Layout'

const Artistsscreenlayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name="index" options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Artists',
					}}
/>
        </Stack>
    </View>
  )
}

export default Artistsscreenlayout