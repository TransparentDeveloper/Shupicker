import type { ButtonHTMLAttributes } from 'react'
import { SIZE_CSS } from './button.style'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	size?: keyof typeof SIZE_CSS
	children?: string
}
export type $ButtonBase = {
	$size: keyof typeof SIZE_CSS
}
