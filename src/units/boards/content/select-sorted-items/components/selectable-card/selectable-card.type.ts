export type SelectableCardProps = {
	isSelected?: boolean
	sortedItemLabel: string // 정렬항목 이름
	currentSortedItemValue: number // 정렬항목의 현재 값
	maxSortedItemValue: number // 정렬항목의 최댓값
	currentJoinCount: number // 특정 개인의 참여 횟수
	maxJoinCount: number // 전체 참여자의 참여 횟수 중 최댓값

	onClickCard: VoidFunction
}
