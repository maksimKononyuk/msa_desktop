import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider as PaperProvider } from 'react-native-paper'

import Auth from './src/pages/Auth'
import Main from './src/pages/Main'

import { theme } from './src/Constants'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          headerMode={'screen'}
          screenOptions={() => ({
            headerShown: false,
            title: 'MSA',
            cardStyle: { backgroundColor: 'transparent' },
            cardOverlayEnabled: false,
            animationEnabled: true
          })}
          mode='modal'
          initialRouteName='Auth'
        >
          <Stack.Screen name='Auth' component={Auth} />
          <Stack.Screen name='Main' component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}
