import { VerticalScrollContainer } from '@/components/layout/vertical-scroll-container'
import { URL_PARAM_GROUP, URL_PARAM_PERSONNEL, URL_PARAM_SORT_METHOD } from '@/constants'
import { useManageUrlArray } from '@/hooks'
import { useSearchSingleValue } from '@/hooks/use-search-single-value'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import type { GroupType, PersonnelType, SortMethodType } from '@/types'
import { BoardBase, BoardHeader } from '@/units/boards'
import { arrayEncoder, sortByJoinCountRelativeToCreation } from '@/utils'
import { faCheck, faSortAmountDownAlt, faSortAmountUpAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SelectableCard } from './components'

const SelectSortedItems = () => {
	const [selectedIdArray, setSelectedIdArray] = useState<Array<number>>([])
	const { getArray: getPersonnelArray } = useManageUrlArray<PersonnelType>(URL_PARAM_PERSONNEL)
	const { getArray: getGroupArray } = useManageUrlArray<GroupType>(URL_PARAM_GROUP)
	const [params, setParams] = useSearchParams()
	const { getValue: getSortMethod, updateValue: updateSortMethod } =
		useSearchSingleValue(URL_PARAM_SORT_METHOD)

	const personnelArray = getPersonnelArray()
	const groupArray = getGroupArray()
	const sortMethod = getSortMethod('ascend') as SortMethodType

	/** 정렬된 멤버리스트 */
	const sortedPersonnelArray = sortByJoinCountRelativeToCreation(personnelArray, 10, sortMethod)

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
		const updatedPersonnelArray: Array<PersonnelType> = [...personnelArray]
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
		<BoardBase>
			<BoardHeader
				sectionName="👆 정렬 & 선택"
				iconButtonDataArray={[
					{
						// [현재 정렬 상태] 를 아이콘으로 출력
						iconData: sortMethod === 'ascend' ? faSortAmountUpAlt : faSortAmountDownAlt,
						onClick: () => {
							if (sortMethod === 'ascend') updateSortMethod('descend')
							else updateSortMethod('ascend')
						}
					},
					{
						iconData: faCheck,
						hoverBgColor: COLOR.system.confirm,
						onClick: onHandleAddingGroupElement
					}
				]}
			/>
			<VerticalScrollContainer height="34vh" gap="1.5rem">
				{sortedPersonnelArray.map((personnel) => {
					return (
						<SelectableCard
							key={personnel.id}
							isSelected={selectedIdArray.includes(personnel.id)}
							{...{ personnel }}
							onClickCard={() => {
								onHandleSelectedIdArray(personnel.id)
							}}
						/>
					)
				})}
			</VerticalScrollContainer>
		</BoardBase>
	)
}

export default SelectSortedItems
