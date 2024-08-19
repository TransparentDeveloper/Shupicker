import {MEMBER_KEY} from '@/constants'
import {getGMemberNames} from '@/functions/group'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import {DeleteGroupButton} from './delete-group-button'
import {DeletingGroupConfirmationModal} from './deleting-group-confirmation-modal'
import type {GroupItemPT} from './group-itme.type'

export const GroupItem = ({order, group}: GroupItemPT) => {
	const {getArr} = useManageDataOnUrl()
	const {onOpen} = useModal()

	const members = getArr<TMember>(MEMBER_KEY)

	const gMemberNames = getGMemberNames(group, members)
	const groupName = `Group ${order}`

	const onOpenDeletingGroupConfirmation = () => {
		onOpen({
			children: (
				<DeletingGroupConfirmationModal
					groupIdx={order - 1}
					{...{group, groupName}}
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
				<p className='text-sm text-gray-400'>{gMemberNames.join(' | ')}</p>
			</div>

			<div className='flex items-center justify-start'>
				<DeleteGroupButton onClick={onOpenDeletingGroupConfirmation} />
			</div>
		</div>
	)
}
