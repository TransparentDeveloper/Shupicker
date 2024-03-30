import type { ReactNode } from 'react'
import { SIZE_CSS } from './dialog.style'

export type DialogProps = {
	isOpen?: boolean
	size?: keyof typeof SIZE_CSS
	onClose?: VoidFunction
	title: string
	isCloseButton?: boolean
	dialogContent?: ReactNode
}

export type $DialogBaseProps = {
	$size: keyof typeof SIZE_CSS
}
