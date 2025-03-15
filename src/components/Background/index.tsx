import { View } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import './index.scss'

type BackgroundProps = {
  children?: React.ReactNode
  className?: string
} & ViewProps

export default function Background({
  children,
  className = '',
  ...props
}: BackgroundProps) {
  return (
    <View
      className={`background ${className}`}
      {...props}
    >
      {children}
    </View>
  )
}