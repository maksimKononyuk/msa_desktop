import AsyncStorage from '@react-native-async-storage/async-storage'
import { DefaultTheme } from 'react-native-paper'
import { Dimensions } from 'react-native'
import axios from 'axios'

const url = 'https://demomsa.com/api/' // dev
//const url = 'https://customer.demomsa.com/api' // prod

axios.defaults.baseURL = url

axios.interceptors.request.use(
  async (config) => {
    if (!config.headers.Authorization) {
      if (await AsyncStorage.getItem('user')) {
        const token = JSON.parse(await AsyncStorage.getItem('user')).token

        if (token) {
          config.headers.Authorization = `Token ${token}`
        }
      }
    }

    return config
  },
  (error) => Promise.reject(error)
)

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    accent: 'yellow'
  }
}

export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height

export const carouselItems = [
  { title: 'Messages' },
  { title: 'Order' },
  { title: 'Tech. maps' }
]

export const jsonTreeTheme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#FFFFFF',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#282A2D',
  base0C: '#a1efe4',
  base0D: '#009C6D',
  base0E: '#ae81ff',
  base0F: '#cc6633'
}

export const options = {
  container: {
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 30,
    color: '#fff'
  }
}

export const htmlPrint = (id, name, ImgTag) => {
  return `
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body>
      <div style="font-size: 50px; font-family: Helvetica Neue; text-align: center;">
        <p style="margin: 0 0 20px; font-weight: bold";>Order's id</p>
        <p style="margin: 0px">${id}</p>
        <p style="margin: 40px 0 20px; font-weight: bold"">Order's name</p>
        <p style="margin: 0px">${name}</p>
        <div style="width: 500px; height: 500px; margin: 0 auto;">
         ${ImgTag}
        </div>
      </div>
    </body>
  </html>
  `
}
