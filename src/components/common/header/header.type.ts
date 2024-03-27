import { $SizeProps, SizeProps } from '@/types'

export type HeaderProps = Pick<SizeProps, 'height'> & {
	isMobile?: boolean
}
export type $HeaderBase = Pick<$SizeProps, '$height'> & {
	$isMobile: boolean
}
