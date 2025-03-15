import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Profile() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='profile'>
      <Text>我的页面</Text>
    </View>
  )
}