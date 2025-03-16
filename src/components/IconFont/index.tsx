import { Text } from '@tarojs/components';
import './index.css';
import classNames from 'classnames';

interface PropsType {
    name?: string;
    size?: number;
    children?: React.ReactNode;
    className?: string;
}
function IconFont({name, size = 24, children, className}: PropsType) {
    return <Text className={classNames('iconfont', className)} style={{ fontSize: size , fontFamily: "iconfont", fontStyle: "normal"}}>{ name || children }</Text>;
}

export default IconFont;