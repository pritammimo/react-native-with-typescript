import { colors, fontSize } from '@/constants/Tokens'
import { FontAwesome, FontAwesome6, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import React from 'react'
import { StyleSheet } from 'react-native'

const TabsNavigation = () => {
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: colors.primary,
      tabBarLabelStyle: {
        fontSize: fontSize.xs,
        fontWeight:'500'
      },
      headerShown:false,
      tabBarStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position:'absolute',
        borderTopWidth:0,
       paddingTop:8,
      },
      tabBarBackground: () => (
        <BlurView
          intensity={95}
          style={{
            ...StyleSheet.absoluteFillObject,
            overflow: 'hidden',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />
      ),
    }}
    >
      <Tabs.Screen name="favourites" options={{
       title:"Favourites",
       tabBarIcon:({color}) => <FontAwesome name="heart" size={24} color={color}/>
      }}/>
      <Tabs.Screen name="playlists" 
      options={{
        title:"Playlists",
        tabBarIcon:({color}) => <MaterialCommunityIcons name="playlist-play" size={24} color={color}/>
       }}/>
    <Tabs.Screen name="(songs)" options={{
        title:"Songs",
        tabBarIcon:({color}) => <Ionicons name="musical-notes-sharp" size={24} color={color}/>
       }} />
    <Tabs.Screen name="artists" 
    options={{
      title:"Artists",
      tabBarIcon:({color}) => <FontAwesome6 name="users-line" size={24} color={color}/>
     }}
    
    />
    </Tabs>
  )
}

export default TabsNavigation