import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ButtonHTMLAttributes } from 'react'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	iconData: IconProp
	onClick?: VoidFunction
	bgColor?: string
	iconColor?: string
	hoverBgColor?: string
	hoverIconColor?: string
}

export type $RoundSquareButtonProps = {
	$bgColor: string
	$iconColor: string
	$hoverBgColor: string
	$hoverIconColor: string
}
