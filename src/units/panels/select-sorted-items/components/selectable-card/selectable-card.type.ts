export type SelectableCardProps = {
	isSelected?: boolean
	memberName: string // 참여자 이름
	sortedItemLabel: string // 정렬항목 이름
	currentSortedItemValue: number // 정렬항목의 현재 값
	maxSortedItemValue: number // 정렬항목의 최댓값
	currentJoinCount: number // 특정 참여자의 참여 횟수
	maxJoinCount: number // 전체 참여자의 참여 횟수 중 최댓값
	onClickCard: VoidFunction
}
