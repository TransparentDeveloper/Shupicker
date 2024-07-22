import {Button} from '@/components/common'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'
import type {DeletingGroupConfirmationModalPT} from './deleting-group-confirmation-modal.type'
import {subtractGroupMembersPlayCnt} from './deleting-group-confirmation-modal.util'
import {NoticeSection} from './notice-section'

export const DeletingGroupConfirmationModal = ({
	group,
	groupName,
	groupMembers,
	groupIdx,
}: DeletingGroupConfirmationModalPT) => {
	const {getArr, updateArr, removeOneFromArr, flush} = useManageDataOnUrl()
	const {onClose} = useModal()

	const memberArr = getArr<TMember>(MEMBER_KEY)
	const groupMemberIds = group.memberIds

	const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		e.stopPropagation()
		onClose()

		const updatedMemberArr = subtractGroupMembersPlayCnt(
			groupMemberIds,
			memberArr,
		)
		updateArr<TMember>(MEMBER_KEY, updatedMemberArr)
		removeOneFromArr<TGroup>(GROUP_KEY, groupIdx)
		flush()
	}
	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<NoticeSection {...{groupName, groupMembers}} />
			<section className='mt-auto flex h-[80px] w-full items-center justify-center'>
				<Button onClick={onDelete}>해채하기</Button>
			</section>
		</div>
	)
}
