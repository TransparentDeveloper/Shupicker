import { SIZE_CSS } from './button.style'

export type ButtonProps = {
	size?: keyof typeof SIZE_CSS
	children?: string
}
export type $ButtonBase = {
	$size: keyof typeof SIZE_CSS
}
