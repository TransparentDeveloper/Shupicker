import {Button} from '@/components/common'
import {SectionBase, SectionHeader} from '@/components/common/section-base'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {addOnlyGMemberPlays, createGroup} from '@/functions/group'
import {sortMembers} from '@/functions/member'
import {useManageDataOnUrl} from '@/hooks'
import {generateID} from '@/libs/uuid/util'
import type {TMember, TOrder, TSortBy} from '@/types'
import {isEmpty} from 'lodash'
import {useMemo, useState} from 'react'
import {MemberTableBody} from './sub/member-table-body'
import {MemberTableHead} from './sub/member-table-head'
import {SelectionCounter} from './sub/selection-counter'

export const SelectSection = () => {
	const {getArr, addToArr, updateArr, flush} = useManageDataOnUrl()
	const [order, setOrder] = useState<TOrder>('desc')
	const [sortBy, setSortBy] = useState<TSortBy>('cntPerTime')
	const [selectedMemberIds, setSelectedMemberIds] = useState<string[]>([])

	const members = getArr<TMember>(MEMBER_KEY)

	const sortedMembers = useMemo(
		() => sortMembers(members, sortBy, order),
		[members, sortBy, order],
	)

	const membersSize = members.length
	const selectedMembersSize = 0
	selectedMemberIds.forEach(() => {})

	const onAddGroup = () => {
		if (isEmpty(selectedMemberIds)) {
			alert('선택된 회원이 없습니다.')
			return
		}
		const group = createGroup({
			id: generateID(),
			memberIds: selectedMemberIds,
		})
		const updatedMembers = addOnlyGMemberPlays(group, members, 1)

		setSelectedMemberIds([])
		addToArr(GROUP_KEY, group)
		updateArr<TMember>(MEMBER_KEY, updatedMembers)
		flush()
	}

	return (
		<SectionBase className='grid grid-rows-[50px_auto_1fr_48px] gap-2'>
			<SectionHeader
				title='참여 인원 선택'
				description='다음 경기에 참여할 인원을 선택해주세요.'
			/>
			<SelectionCounter selected={selectedMembersSize} total={membersSize} />
			<table className='flex h-full w-full flex-col items-start overflow-hidden rounded-none border-y-[2px] border-white'>
				<MemberTableHead {...{sortBy, order, setSortBy, setOrder}} />
				<MemberTableBody
					members={sortedMembers}
					{...{selectedMemberIds, setSelectedMemberIds}}
				/>
			</table>
			<Button flexibility='full' onClick={onAddGroup}>
				새 그룹 추가
			</Button>
		</SectionBase>
	)
}
