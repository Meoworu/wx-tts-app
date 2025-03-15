import { View, Text, Textarea } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'

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
      <View className='word-count'>
        <Text>{content.length}</Text>
        <Text>/{maxLength}</Text>
      </View>
    </View>
  )
}