import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	width?: string
	fontSize?: string
	bgColor?: string
}
export type $InputBaseProps = {
	$width: string
	$fontSize: string
	$bgColor: string
}
