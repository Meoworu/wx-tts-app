import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Tools() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='tools'>
      <Text>工具页面</Text>
    </View>
  )
}