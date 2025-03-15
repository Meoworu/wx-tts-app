import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'

export default function Works() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='works'>
      <Text>作品页面</Text>
    </View>
  )
}