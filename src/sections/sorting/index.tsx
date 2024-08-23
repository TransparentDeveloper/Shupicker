import {Button} from '@/components/common/button.tsx'
import {
	SectionBase,
	SectionHeader,
} from '@/components/common/section-base/index.tsx'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {createGroup} from '@/functions/group.ts'
import {addMemberPlay, sortMembers} from '@/functions/member.ts'
import {useManageDataOnUrl} from '@/hooks'
import type {TMember, TOrder, TSortBy} from '@/types'
import {useState} from 'react'
import {SelectedItemsCounter} from './selected-items-counter/index.tsx'
import {TableBody} from './table-body/index.tsx'
import {TableHead} from './table-head/index.tsx'

export const SortingSection = () => {
	const {getArr, saveArr, addToArr, flush} = useManageDataOnUrl()
	const [order, setOrder] = useState<TOrder>('desc')
	const [sortBy, setSortBy] = useState<TSortBy>('cntPerTime')
	const [selectedMemberIds, setSelectedMemberIds] = useState<string[]>([])

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
		const updatedMembers = members.map((member) => {
			const memberId = member.id
			if (selectedMemberIds.includes(memberId)) return addMemberPlay(member, 1)
			return member
		})
		const newGroup = createGroup({memberIds: selectedMemberIds})
		addToArr(GROUP_KEY, newGroup)
		saveArr(MEMBER_KEY, updatedMembers)
		setSelectedMemberIds([])
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
			<Button flexibility='full' onClick={onAddGroup}>
				새 그룹 추가
			</Button>
		</SectionBase>
	)
}
