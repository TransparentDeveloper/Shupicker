import {MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import {extractMembersById} from '../../record.utils'
import {DeleteGroupButton} from './delete-group-button'
import {DeletingGroupConfirmationModal} from './deleting-group-confirmation-modal'
import type {GroupItemPT} from './group-itme.type'

export const GroupItem = ({order, group}: GroupItemPT) => {
	const {getArr} = useManageDataOnUrl()
	const {onOpen} = useModal()

	const memberArr = getArr<TMember>(MEMBER_KEY)

	const groupMembers = extractMembersById(memberArr, group.memberIds)
	const membersNameArr = groupMembers.map((group) => group.name)
	const groupName = `Group ${order}`

	const onOpenDeletingGroupConfirmation = () => {
		onOpen({
			children: (
				<DeletingGroupConfirmationModal
					groupIdx={order - 1}
					{...{group, groupMembers, groupName}}
				/>
			),
		})
	}

	return (
		<div className='grid h-[70px] w-full grid-cols-[72px_1fr_40px] rounded-[15px] border-[2px] border-white'>
			<div className='flex h-full w-full items-center justify-center'>
				<h4 className='text-xl font-semibold'>{order}</h4>
			</div>

			<div className='flex flex-col items-start justify-center'>
				<p>{groupName}</p>
				<p className='text-sm text-gray-400'>{membersNameArr.join(' | ')}</p>
			</div>

			<div className='flex items-center justify-start'>
				<DeleteGroupButton onClick={onOpenDeletingGroupConfirmation} />
			</div>
		</div>
	)
}
