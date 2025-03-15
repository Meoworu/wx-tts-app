import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'

export default function Works() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='works'>
      <NavigationBar
        title='作品'
      />
      <Text>作品页面</Text>
    </View>
  )
}