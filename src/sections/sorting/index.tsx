import {
	SectionBase,
	SectionHeader,
} from '@/components/common/section-base/index.tsx'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import type {TMember, TOrder, TSortBy} from '@/types'
import {getEmptyArray} from '@/utils/array-manager'
import {createNewGroup} from '@/utils/group-manager'
import {useState} from 'react'
import {AddGroupButton} from './add-group-button/index.tsx'
import {SelectedItemsCounter} from './selected-items-counter/index.tsx'
import {raisePlayingCnt, sortMembers} from './sorting.util.ts'
import {TableBody} from './table-body/index.tsx'
import {TableHead} from './table-head/index.tsx'

export const SortingSection = () => {
	const {getArr, saveArr, addToArr, flush} = useManageDataOnUrl()
	const [order, setOrder] = useState<TOrder>('desc')
	const [sortBy, setSortBy] = useState<TSortBy>('cntPerTime')
	const [selectedMemberIds, setSelectedMemberIds] =
		useState<string[]>(getEmptyArray())

	const members = getArr<TMember>(MEMBER_KEY)
	const sortedMembers = sortMembers(members, sortBy, order)

	const onClickHeadTap = (focusedSortBy: TSortBy) => {
		if (focusedSortBy === sortBy) {
			setOrder((prev) => {
				if (prev === 'asc') return 'desc'
				return 'asc'
			})
		} else {
			setSortBy(focusedSortBy)
			setOrder('desc')
		}
	}

	const onAddGroup = () => {
		if (selectedMemberIds.length === 0) {
			alert('선택된 회원이 없습니다.')
			return
		}
		const updatedMembers = raisePlayingCnt(members, selectedMemberIds)
		const newGroup = createNewGroup(selectedMemberIds)
		addToArr(GROUP_KEY, newGroup)
		saveArr(MEMBER_KEY, updatedMembers)
		setSelectedMemberIds(getEmptyArray())
		flush()
	}

	return (
		<SectionBase className='grid grid-rows-[50px_50px_1fr_3rem] gap-1'>
			<SectionHeader
				title='참여 인원 선택'
				description='다음 경기에 참여할 인원을 선택해주세요.'
			/>
			<SelectedItemsCounter
				totalNum={selectedMemberIds.length}
				partialNum={members.length}
			/>
			<table
				className='flex h-full flex-col items-start overflow-hidden border-[0.5px] border-white'
				width='100%'
			>
				<TableHead {...{order, sortBy, onClickHeadTap}} />
				<TableBody
					{...{sortedMembers, selectedMemberIds, setSelectedMemberIds}}
				/>
			</table>
			<AddGroupButton onClick={onAddGroup} />
		</SectionBase>
	)
}
