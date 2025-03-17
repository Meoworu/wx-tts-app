import { View, Text, Image } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import NavigationBar from '../../components/NavigationBar'
import Background from '@/components/Background'
import { getStoredUserInfo } from '@/utils/login'
import './index.scss'
import IconFont from '@/components/IconFont'

export default function Profile() {
  useLoad(() => {
    console.log('Page loaded.')
  })
    const userInfo = getStoredUserInfo();
    console.log(userInfo);
  return (
    <View className='profile'>
      <NavigationBar
        title='我的'
      />
          <Background style={{ height: 400 }} />
          <View className='profile-header'>
              <View className='profile-ava'>
                  <Image
                    src={userInfo.avatarUrl}
                    className='ava'
                  />
              </View>
              <View className='profile-info'>
                  <View>
                    <Text className='nickname'>{userInfo.nickName}</Text>
                      {/* <Text className='desc'>{userInfo.city}</Text> */}
                      <View className='login'>
                          {/* <IconFont>&#xe63d;</IconFont> */}
                          <Text className='desc'>登录领取会员积分</Text>
                      </View>
                  </View>
              </View>
          </View>
          <View className='profile-content'>
              <View className='profile-card'>
                  <View className='card-item'>
                      <View className='item-left'>
                          <IconFont>&#xe646;</IconFont>
                          <Text className='title'>会员等级</Text>
                      </View>
                      <IconFont className='action'>&#xe604;</IconFont>
                  </View>
                  <View className='card-item'>
                      <View className='item-left'>
                      <IconFont>&#xe616;</IconFont>
                          <Text className='title'>我的客服</Text>
                      </View>
                      <IconFont className='action'>&#xe604;</IconFont>
                  </View>
                  <View className='card-item'>
                      <View className='item-left'>
                        <IconFont className='icon'>&#xe6c0;</IconFont>
                          <Text className='title'>邀请有礼</Text>
                      </View>
                      <IconFont className='action'>&#xe604;</IconFont>
                  </View>
              </View>
          </View>
    </View>
  )
}