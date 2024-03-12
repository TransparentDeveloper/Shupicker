import type { HTMLAttributes } from 'react'

export type BoxProps = HTMLAttributes<HTMLDivElement> & {
	width?: string
	height?: string
	bgColor?: string
	children?: React.ReactNode
}
export type $ContainerProps = {
	$width: string
	$height: string
	$bgColor: string
}
