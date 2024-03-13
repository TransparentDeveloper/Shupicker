import { VerticalScrollContainer } from '@/components/layout/vertical-scroll-container'
import { URL_PARAM_GROUP, URL_PARAM_PERSONNEL } from '@/constants'
import { useManageUrlArray } from '@/hooks'
import { COLOR } from '@/libs/styled-components/reference-tokens'
import type { GroupType, PersonnelType } from '@/types'
import { BoardBase, BoardHeader } from '@/units/boards'
import { arrayEncoder } from '@/utils'
import { faCheck, faSortAmountDownAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SelectableCard } from './components'

const SelectSortedItems = () => {
	const [selectedIdArray, setSelectedIdArray] = useState<Array<number>>([])
	const { getArray: getPersonnelArray } = useManageUrlArray<PersonnelType>(URL_PARAM_PERSONNEL)
	const { getArray: getGroupArray } = useManageUrlArray<GroupType>(URL_PARAM_GROUP)
	const [params, setParams] = useSearchParams()

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
		const personnelArray: Array<PersonnelType> = getPersonnelArray()
		selectedIdArray.forEach((selectedId) => {
			const found = personnelArray.find((personnel) => personnel.id === selectedId)
			found!.joinCount += 1
		})
		params.set(URL_PARAM_PERSONNEL, arrayEncoder<PersonnelType>(personnelArray))

		// 선택된 참여자 id로 group 생성
		const groupArray = getGroupArray()
		const submitNewGroup: GroupType = {
			id: groupArray.length,
			personnelIdArray: [...selectedIdArray]
		}
		params.set(URL_PARAM_GROUP, arrayEncoder<GroupType>([...groupArray, submitNewGroup]))
		setSelectedIdArray([])
		setParams(params)
	}

	return (
		<BoardBase>
			<BoardHeader
				sectionName="👆 정렬 & 선택"
				iconButtonDataArray={[
					{
						iconData: faSortAmountDownAlt,
						onClick: () => {
							window.alert('기능 구현중 입니다..😅')
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
				{getPersonnelArray().map((personnel) => {
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
