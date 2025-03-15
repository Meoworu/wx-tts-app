import { View, Image, ScrollView } from '@tarojs/components'
import './index.scss'

interface VoiceItem {
  id: string
  avatar: string
  name: string
}

const mockVoices: VoiceItem[] = [
  { id: '1', avatar: 'https://s.qunarzz.com/f_cms/2025/1742030063687_091222632.jpg', name: '温柔女声' },
  { id: '2', avatar: 'https://s.qunarzz.com/f_cms/2025/1742030063687_091222632.jpg', name: '磁性男声' },
  { id: '3', avatar: 'https://s.qunarzz.com/f_cms/2025/1742030063687_091222632.jpg', name: '童声' },
  { id: '4', avatar: 'https://s.qunarzz.com/f_cms/2025/1742030063687_091222632.jpg', name: '老年声' },
  { id: '5', avatar: 'https://s.qunarzz.com/f_cms/2025/1742030063687_091222632.jpg', name: '机器人声' },
]

export default function VoiceList() {
  return (
    <View className='voice-list'>
      {mockVoices.map(voice => (
        <View key={voice.id} className='voice-item'>
          <Image className='voice-avatar' src={voice.avatar} />
          <View className='voice-name'>{voice.name}</View>
        </View>
      ))}
    </View>
  )
}