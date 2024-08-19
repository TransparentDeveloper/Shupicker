import {Button} from '@/components/common'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {addGMemberPlays} from '@/functions/group'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'
import type {DeletingGroupConfirmationModalPT} from './deleting-group-confirmation-modal.type'
import {NoticeSection} from './notice-section'

export const DeletingGroupConfirmationModal = ({
	group,
	groupName,
	groupIdx,
}: DeletingGroupConfirmationModalPT) => {
	const {getArr, updateArr, removeOneFromArr, flush} = useManageDataOnUrl()
	const {onClose} = useModal()

	const members = getArr<TMember>(MEMBER_KEY)

	const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		e.stopPropagation()
		onClose()

		const updatedMembers = addGMemberPlays(group, members, -1)
		updateArr<TMember>(MEMBER_KEY, updatedMembers)
		removeOneFromArr<TGroup>(GROUP_KEY, groupIdx)
		flush()
	}
	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<NoticeSection {...{groupName}} />
			<section className='mt-auto flex h-[80px] w-full items-center justify-center'>
				<Button onClick={onDelete}>해채하기</Button>
			</section>
		</div>
	)
}
