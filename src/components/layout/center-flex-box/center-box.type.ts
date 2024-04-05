import type { PropsWithChildren } from 'react'
import { AlignCSS } from './center-box.style'

export type CenterBoxProps = PropsWithChildren & {
	align?: keyof typeof AlignCSS
	gap?: string
}

export type $ContainerProps = {
	$align: keyof typeof AlignCSS
	$gap: string
}
