import type { MemberType } from '@/types'

export type SelectableCardProps = {
	isSelected: boolean
	member: MemberType
	onClickCard: (memberId: number) => void
}
