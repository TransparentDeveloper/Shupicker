import { ColumnFlexBox, PanelBase, PanelHeader } from '@/components'
import PanelMain from '@/components/panel/panel-main'
import { URL_PARAM_GROUP, URL_PARAM_MEMBER, URL_PARAM_SORT_METHOD } from '@/constants'
import { useAnchorTime, useCryptoQuery, useDialog } from '@/hooks'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import type { GroupType, MemberType, OptionalSizeProps, SortMethodType } from '@/types'
import { createGroup, getSortedArrayByUnitTime } from '@/utils'
import { faCheck, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'
import { useCallback, useState } from 'react'
import { SelectableCard } from './components'

const SelectSortedItems = ({ width = '100%', height = '100%' }: OptionalSizeProps) => {
	const { onOverlayWindow } = useDialog()
	const { getArray, getPrimitive, appendArray } = useCryptoQuery()
	const { anchorTime } = useAnchorTime()
	const [selectedMemberIds, setSelectedMemberIds] = useState<Array<number>>([])
	/** 멤버 배열 */
	const memberArray = getArray<MemberType>(URL_PARAM_MEMBER)
	/** 정렬방법 (오름차순 / 내림차순) */
	const sortMethod = getPrimitive(URL_PARAM_SORT_METHOD, 'ascend') as SortMethodType
	/** 정렬된 멤버 배열 */
	const sortedMemberArray = getSortedArrayByUnitTime(memberArray, sortMethod, anchorTime)

	// /** 최대 참여횟수 */
	// const maxParticipation = Math.max(
	// 	...memberArray.map(
	// 		(member) => findEssentialTraitById(member, ESSENTIAL_TRAIT_PARTICIPATION_CNT_ID) as number
	// 	)
	// )

	const onManageSelectedMember = useCallback(
		(memberId: number) => {
			if (selectedMemberIds.includes(memberId))
				setSelectedMemberIds((prev) =>
					prev.filter((selectedMemberId) => selectedMemberId !== memberId)
				)
			else setSelectedMemberIds((prev) => [...prev, memberId])
		},
		[memberArray]
	)
	const onCreateGroup = useCallback(() => {
		if (selectedMemberIds.length < 2) {
			alert('최소 2인 이상 선택해주세요.')
			return
		}
		const newGroup = createGroup(selectedMemberIds)
		appendArray<GroupType>(URL_PARAM_GROUP, newGroup)
		setSelectedMemberIds([])
	}, [selectedMemberIds])

	return (
		<PanelBase {...{ width, height }}>
			<PanelHeader
				sectionName="👆 정렬 & 선택"
				iconButtonDataArray={[
					{
						// [현재 정렬 상태] 를 아이콘으로 출력
						iconData: faSortAmountDownAlt,
						onClick: () => {}
					},
					{
						iconData: faCheck,
						hoverBgColor: COLOR.system.confirm,
						onClick: onCreateGroup
					}
				]}
			/>
			<PanelMain>
				<ColumnFlexBox gap="1rem">
					{sortedMemberArray.map((member) => (
						<SelectableCard
							key={member.id}
							member={member}
							onClickCard={(memberId) => onManageSelectedMember(memberId)}
							isSelected={selectedMemberIds.includes(member.id)}
						/>
					))}
				</ColumnFlexBox>
			</PanelMain>
		</PanelBase>
	)
}
export default SelectSortedItems
