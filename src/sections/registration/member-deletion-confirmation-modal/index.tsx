import {Button} from '@/components/common'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {excludeMemberFromAllGroups} from '@/functions/group'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'
import type {MemberDeletionConfirmationModalPT} from './member-deletion-confirmation-modal.type'
import {NoticeSection} from './notice-section'

export const MemberDeletionConfirmationModal = ({
	idx,
}: MemberDeletionConfirmationModalPT) => {
	const {getArr, removeOneFromArr, updateArr, flush} = useManageDataOnUrl()
	const {onClose} = useModal()

	const members: TMember[] = getArr(MEMBER_KEY)
	const member = members[idx]
	const memberId = member.id
	const groups: TGroup[] = getArr(GROUP_KEY)

	const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const excludedGroups = excludeMemberFromAllGroups(groups, memberId)
		e.preventDefault()
		e.stopPropagation()
		onClose()
		updateArr(GROUP_KEY, excludedGroups)
		removeOneFromArr(MEMBER_KEY, idx)
		flush()
	}

	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<NoticeSection {...{member}} />
			<section className='mt-auto flex h-[80px] w-full items-center justify-center'>
				<Button onClick={onDelete}>삭제하기</Button>
			</section>
		</div>
	)
}
