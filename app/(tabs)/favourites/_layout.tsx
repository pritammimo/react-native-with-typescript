import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { StackScreenWithSearchBar } from '@/constants/Layout'

const Favouritescreenlayout = () => {
  return (
    <View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...StackScreenWithSearchBar,
						headerTitle: 'Favorites',
					}}
				/>
			</Stack>
		</View>

  )
}

export default Favouritescreenlayout