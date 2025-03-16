import { PropsWithChildren, useEffect, useMemo, useState } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.scss'
import { View } from '@tarojs/components'
import { useAuth } from './utils/login'

interface AppProps { }


function App({ children }: PropsWithChildren<AppProps>) {
    useLaunch(() => {
        console.log('App launched.')
    })
    // useAuth()

    return (
        <View>
            {children}
        </View>
    )
}

export default App
