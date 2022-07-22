import React, { useEffect, useCallback, useRef, useState } from 'react'
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Animatable from 'react-native-animatable'
import { TextInput } from 'react-native-paper'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import * as Updates from 'expo-updates'
import axios from 'axios'
import authIcon from '../assets/images/auth.png'

import styles from '../styles/Styles'

let customFonts = {
  Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
  Montserrat: require('../assets/fonts/Montserrat-Regular.ttf')
}

function Auth({ navigation }) {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [appIsReady, setAppIsReady] = useState(false)
  const [showError, setShowError] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const passwordTextInput = useRef()

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync(customFonts)
        await AsyncStorage.clear()
        const update = await Updates.checkForUpdateAsync()
        if (update.isAvailable) {
          Alert.alert(
            'MSA Mobile',
            'A new update is available. The application will be reloaded.',
            [
              {
                text: 'Ok',
                onPress: async () => {
                  await Updates.fetchUpdateAsync()
                  Updates.reloadAsync()
                }
              }
            ],
            { cancelable: false }
          )
        }
      } catch (e) {
        console.log(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  const tryAuth = async () => {
    await axios
      .post('users/login', { user: { name: login, password } })
      .then(async (res) => {
        await AsyncStorage.setItem('role', res.data.role)
        await AsyncStorage.setItem('user', JSON.stringify(res.data.user))
        const userData = await axios.get(`worker_name/${res.data.user.u_id}`)
        axios
          .put('worker_in', { _id: res.data.user.u_id, at_work: true })
          .then(() => {
            setLogin('')
            setPassword('')
            navigation.navigate('Main', { userName: userData.data[0].name })
          })
      })
      .catch((err) => {
        console.warn(err)
        setShowError(true)
      })
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.authContainer}>
        <Image
          style={{ width: 230, height: 100, paddingBottom: 20 }}
          source={authIcon}
        />
        <TextInput
          label='Login'
          value={login}
          onChangeText={(text) => setLogin(text)}
          style={styles.authInput}
          underlineColor={'#B1B1B1'}
          error={false}
          autoFocus={true}
          returnKeyType={'next'}
          onSubmitEditing={() => passwordTextInput.current.focus()}
          blurOnSubmit={false}
        />
        <View style={{ width: '100%' }}>
          <TextInput
            label='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.authInput}
            underlineColor={'#B1B1B1'}
            error={false}
            secureTextEntry={!isPasswordVisible}
            ref={passwordTextInput}
          />
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              position: 'absolute',
              width: 35,
              height: 35,
              right: 0,
              top: '50%',
              transform: [{ translateY: -5 }]
            }}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Image
              style={{ width: '100%', height: '100%' }}
              source={require('../assets/icons/passwordVisible.png')}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => tryAuth()}
          style={styles.authButton}
        >
          <Text style={styles.authText}>Sign in</Text>
        </TouchableOpacity>
      </View>

      {showError && (
        <Animatable.View
          style={styles.authError}
          animation='wobble'
          onAnimationEnd={() => setTimeout(() => setShowError(false), 3000)}
        >
          <Text style={{ fontSize: 18, fontFamily: 'Roboto', color: '#fff' }}>
            The login or password is incorrect.
          </Text>
          <Text
            style={{ fontSize: 14, fontFamily: 'Roboto', color: '#FFB5B5' }}
          >
            Please try again or contact your administrator.
          </Text>
        </Animatable.View>
      )}
    </View>
  )
}

export default Auth
