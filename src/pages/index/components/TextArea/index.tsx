import { View, Text, Textarea } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'
import Icon from '../../../../components/Icon'

interface TextAreaProps {
  maxLength?: number
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export default function TextArea({
  maxLength = 1000,
  placeholder = '请输入内容...',
  value = '',
  onChange
}: TextAreaProps) {
  const [content, setContent] = useState(value)

  const handleInput = (e) => {
    const newValue = e.detail.value
    setContent(newValue)
    onChange?.(newValue)
  }

  return (
    <View className='text-area-container'>
      <Textarea
        className='text-input'
        value={content}
        placeholder={placeholder}
        maxlength={maxLength}
        onInput={handleInput}
      />
          <View className='action-box'>
              <View className='delete'>
                  {/* <Icon>你好</Icon> */}
                  <Text>清除文本</Text>
              </View>
          <View className='word-count'>
                <Text>{content.length}</Text>
                <Text>/{maxLength}</Text>
            </View>
          </View>
      
    </View>
  )
}