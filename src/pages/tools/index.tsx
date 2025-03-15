import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'

export default function Tools() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='tools'>
      <NavigationBar
        title='工具'
      />
      <Text>工具页面</Text>
    </View>
  )
}