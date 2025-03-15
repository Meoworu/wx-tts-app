import { View, Text, Textarea } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'
import './index.scss'

export default function CreationPage () {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='creation-page'>
      <NavigationBar
        title='首页'
        backgroundColor='#f5f7fa'
        textColor='#333'
      />
      {/* <View className='page-header'>
        <View className='page-title'>制作提示</View>
      </View>
      
      <View className='prompt-content'>
        <Textarea
          className='prompt-input'
          placeholder='智明风格流畅找找器器合的DC字..'
          placeholderClass='input-placeholder'
        />
      </View>

      <View className='tool-options'>
        <View className='tool-item'>
          <View className='tool-icon'>
            <Text className='iconfont'>&#xe72d;</Text>
          </View>
          <Text className='tool-name'>发散</Text>
        </View>
        <View className='tool-item'>
          <View className='tool-icon'>
            <Text className='iconfont'>&#xe6ae;</Text>
          </View>
          <Text className='tool-name'>名字...</Text>
        </View>
        <View className='tool-item'>
          <View className='tool-icon'>
            <Text className='iconfont'>&#xe617;</Text>
          </View>
          <Text className='tool-name'>智思...</Text>
        </View>
        <View className='tool-item'>
          <View className='tool-icon'>
            <Text className='iconfont'>&#xe8bb;</Text>
          </View>
          <Text className='tool-name'>把句...</Text>
        </View>
        <View className='tool-item'>
          <Text className='tool-name'>预留自节</Text>
        </View>
      </View>

      <View className='action-bar'>
        <View className='action-button'>会员优先</View>
        <View className='action-button primary'>兑换签</View>
        <View className='action-button'>以依</View>
      </View> */}
    </View>
  )
}
