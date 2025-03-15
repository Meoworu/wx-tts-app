import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'

import './app.scss'

interface AppProps {}

function App({ children }: PropsWithChildren<AppProps>) {
  useLaunch(() => {
    console.log('App launched.')
  })

  return (
    <>
      {children}
    </>
  )
}

export default App
