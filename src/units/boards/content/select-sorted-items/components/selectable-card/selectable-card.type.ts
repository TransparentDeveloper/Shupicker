import type { PersonnelType } from '@/types'

export type SelectableCardProps = {
	isSelected?: boolean
	personnel: PersonnelType
	onClickCard: VoidFunction
}
