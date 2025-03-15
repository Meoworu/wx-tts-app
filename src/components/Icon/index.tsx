import { Text } from '@tarojs/components';
import { TextProps } from '@tarojs/components/types/Text';
import classNames from 'classnames';
import './index.scss';

interface IconProps extends Omit<TextProps, 'className'> {
  /** 图标大小，单位rpx */
  size?: number;
  /** 图标颜色 */
  color?: string;
  /** 自定义类名 */
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  children,
  size = 16,
  color,
  className,
  ...props
}) => {
  return (
    <Text
      className={classNames('iconfont', className)}
      style={{
        fontSize: size + 'px',
        color
      }}
      {...props}
    >{ children }</Text>
  );
};

export default Icon;