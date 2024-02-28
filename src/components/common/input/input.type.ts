import type { InputHTMLAttributes, RefObject } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	width?: string
	fontSize?: string
	bgColor?: string
	ref?: RefObject<HTMLInputElement>
}
export type $InputBaseProps = {
	$width: string
	$fontSize: string
	$bgColor: string
}
