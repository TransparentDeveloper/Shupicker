import { AlignCSS } from './center-box.style'

export type CenterBoxProps = {
	align?: keyof typeof AlignCSS
	gap?: string
	children?: React.ReactNode
}

export type $ContainerProps = {
	$align: keyof typeof AlignCSS
	$gap: string
}
