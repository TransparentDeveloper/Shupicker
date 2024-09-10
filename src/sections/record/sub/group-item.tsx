import {getGMemberNames} from '@/functions/group'
import {findMemberById} from '@/functions/member'
import {isUndefined} from '@/functions/type-guard'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'
import {X} from 'lucide-react'

type GroupItemPT = {
	group: TGroup
	members: TMember[]
	groupIdx: number
	onOpenDeleteGroupModal: (
		group: TGroup,
		members: TMember[],
		groupIdx: number,
	) => void
}

export const GroupItem = ({
	group,
	groupIdx,
	members,
	onOpenDeleteGroupModal,
}: GroupItemPT) => {
	const gMemberIds = group.memberIds
	const gMembers = gMemberIds
		.map((id) => findMemberById(members, id))
		.filter((gMember) => !isUndefined(gMember))

	const gMemberNames = getGMemberNames(gMembers)
	const order = groupIdx + 1
	const groupName = `Group ${order}`

	return (
		<div className='grid h-fit min-h-[70px] w-full grid-cols-[72px_1fr_40px] rounded-[15px] border-[2px] border-white'>
			<ItemOrder {...{order}} />
			<ItemBody {...{groupName, gMemberNames}} />
			<div className='flex items-center justify-start'>
				<X
					className='aspect-square h-1/2 stroke-gray-500 transition-transform hover:scale-125 hover:stroke-white'
					onClick={() => {
						onOpenDeleteGroupModal(group, members, groupIdx)
					}}
				/>
			</div>
		</div>
	)
}

type ItemOrderPT = {
	order: number
}
const ItemOrder = ({order}: ItemOrderPT) => {
	return (
		<section className='flex h-full w-full items-center justify-center'>
			<p className='text-xl font-semibold'>{order}</p>
		</section>
	)
}

type ItemBodyPT = {
	groupName: string
	gMemberNames: string[]
}
const ItemBody = ({groupName, gMemberNames}: ItemBodyPT) => {
	return (
		<section className='flex flex-col flex-nowrap items-start justify-center overflow-hidden'>
			<p>{groupName}</p>
			<p className='w-full truncate text-sm text-gray-400'>
				{gMemberNames.join(' | ')}
			</p>
		</section>
	)
}
