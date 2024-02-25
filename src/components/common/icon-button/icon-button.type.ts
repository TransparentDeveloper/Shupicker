import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { ButtonHTMLAttributes } from 'react'
import { ShapeCSS } from './icon-button.style'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	iconData: IconProp
	bgColor?: string
	iconColor?: string
	hoverBgColor?: string
	hoverIconColor?: string
	shape?: keyof typeof ShapeCSS
}

export type $RoundSquareButtonProps = {
	$bgColor: string
	$iconColor: string
	$hoverBgColor: string
	$hoverIconColor: string
	$shape: keyof typeof ShapeCSS
}
