import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type * as T from './shupicker-icon.type'

const ShupickerIcon = ({ iconData, color, size }: T.ShupickerIconProps) => {
	return <FontAwesomeIcon icon={iconData} size={size} color={color} />
}
export default ShupickerIcon
