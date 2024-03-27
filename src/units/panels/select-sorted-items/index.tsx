import { ColumnFlexBox, PanelBase, PanelHeader } from '@/components'
import PanelMain from '@/components/panel/panel-main'
import { URL_PARAM_GROUP, URL_PARAM_PERSONNEL, URL_PARAM_SORT_METHOD } from '@/constants'
import { useManageUrlArray } from '@/hooks'
import { useSearchSingleValue } from '@/hooks/use-search-single-value'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import type { GroupType, OptionalSizeProps, PersonnelType, SortMethodType } from '@/types'
import { arrayEncoder, sortByJoinCountRelativeToCreation } from '@/utils'
import { getAverageJoinCountPerUnitMinute } from '@/utils/common'
import { faCheck, faSortAmountDownAlt, faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SelectableCard } from './components'

const SelectSortedItems = ({ width = '100%', height = '100%' }: OptionalSizeProps) => {
	const [selectedIdArray, setSelectedIdArray] = useState<Array<number>>([])
	const { getArray: getMemberArray } = useManageUrlArray<PersonnelType>(URL_PARAM_PERSONNEL)
	const { getArray: getGroupArray } = useManageUrlArray<GroupType>(URL_PARAM_GROUP)
	const { getValue: getSortMethod, setValue: setSortMethod } =
		useSearchSingleValue(URL_PARAM_SORT_METHOD)
	// const { getValue: getSortBy, setValue: setSortBy } = useSearchSingleValue(URL_PARAM_SORT_BY)
	const [params, setParams] = useSearchParams()

	/** 멤버 배열 */
	const memberArray = getMemberArray()
	/** 그룹 배열  */
	const groupArray = getGroupArray()
	/** 정렬기준 ( = 정렬항목 ) */
	// const sortBy = getSortBy('join-count-per-time')
	/** 정렬법 ( 'ascend' or 'descend' ) */
	const sortMethod = getSortMethod('ascend') as SortMethodType

	/** 정렬된 멤버배열 */
	const sortedMemberArray = sortByJoinCountRelativeToCreation([...memberArray], 10, sortMethod)
	/** 참여횟수 배열 */
	const joinCountArray = sortedMemberArray.map((member) => member.joinCount)
	/** 참여횟수 중 최댓값 */
	const maxJoinCount = Math.max(...joinCountArray) ?? 0
	/** 10분 당 평균참여횟수 배열 */
	const averageJoinCountPer10MinuteArray = sortedMemberArray.map((member) =>
		getAverageJoinCountPerUnitMinute(Date.now(), member?.joinedAt ?? 0, member?.joinCount ?? 0, 10)
	)
	/** 10분 당 참여횟수 중 최댓값 */
	const maxAverageJoinCountPer10MinuteArray =
		sortMethod === 'ascend'
			? averageJoinCountPer10MinuteArray.at(0) ?? 0
			: averageJoinCountPer10MinuteArray.at(-1) ?? 0

	const onHandleSelectedIdArray = (id: number) => {
		if (selectedIdArray.includes(id)) {
			const newArray = selectedIdArray.filter((elem) => elem !== id)
			setSelectedIdArray(newArray)
		} else {
			setSelectedIdArray((prev) => [...prev, id])
		}
	}

	const onHandleAddingGroupElement = () => {
		if (selectedIdArray.length < 2) {
			window.alert('최소 2 인 이상 선택해주세요.')
			return
		}

		// 선택된 참여자들 참여횟수 +1
		const updatedPersonnelArray: Array<PersonnelType> = [...memberArray]
		selectedIdArray.forEach((selectedId) => {
			const found = updatedPersonnelArray.find((personnel) => personnel.id === selectedId)
			found!.joinCount += 1
		})
		params.set(URL_PARAM_PERSONNEL, arrayEncoder<PersonnelType>(updatedPersonnelArray))

		// 선택된 참여자 id로 group 생성
		const newGroupArray = groupArray
		const submitNewGroup: GroupType = {
			id: newGroupArray.length,
			personnelIdArray: [...selectedIdArray]
		}
		params.set(URL_PARAM_GROUP, arrayEncoder<GroupType>([...newGroupArray, submitNewGroup]))
		setSelectedIdArray([])
		setParams(params)
	}

	return (
		<PanelBase {...{ width, height }}>
			<PanelHeader
				sectionName="👆 정렬 & 선택"
				iconButtonDataArray={[
					{
						// [현재 정렬 상태] 를 아이콘으로 출력
						iconData: sortMethod === 'ascend' ? faSortAmountUpAlt : faSortAmountDownAlt,
						onClick: () => {
							if (sortMethod === 'ascend') setSortMethod('descend')
							else setSortMethod('ascend')
						}
					},
					{
						iconData: faCheck,
						hoverBgColor: COLOR.system.confirm,
						onClick: onHandleAddingGroupElement
					}
				]}
			/>
			<PanelMain>
				<ColumnFlexBox gap="0.5rem">
					{sortedMemberArray.map((member, idx) => {
						return (
							<SelectableCard
								key={member.id}
								isSelected={selectedIdArray.includes(member.id)}
								memberName={member.name}
								sortedItemLabel="10분 당, 참여횟수"
								currentSortedItemValue={averageJoinCountPer10MinuteArray[idx]}
								maxSortedItemValue={maxAverageJoinCountPer10MinuteArray}
								currentJoinCount={member.joinCount}
								maxJoinCount={maxJoinCount}
								onClickCard={() => {
									onHandleSelectedIdArray(member.id)
								}}
							/>
						)
					})}
				</ColumnFlexBox>
			</PanelMain>
		</PanelBase>
	)
}

export default SelectSortedItems
