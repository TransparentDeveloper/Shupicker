import type { $SizeProps, SizeProps } from '@/types'

export type PanelBaseProps = SizeProps & {
	backgroundColor?: string
	children?: React.ReactNode
}

export type $Container = $SizeProps & {
	$backgroundColor: string
}
