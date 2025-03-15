import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'

export default function Profile() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='profile'>
      <NavigationBar
        title='我的'
      />
      <Text>我的页面</Text>
    </View>
  )
}