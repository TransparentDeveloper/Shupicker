import {Button} from '@/components/common'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'
import {isUndefined} from 'lodash'
import type {MemberDeletionConfirmationModalPT} from './member-deletion-confirmation-modal.type'
import {
	excludeMemberFromAllGroup,
	getNonEmptyGroupArr,
} from './member-deletion-confirmation-modal.util'
import {NoticeSection} from './notice-section'

export const MemberDeletionConfirmationModal = ({
	idx,
}: MemberDeletionConfirmationModalPT) => {
	const {getArr, removeOneFromArr, updateArr, flush} = useManageDataOnUrl()
	const {onClose} = useModal()

	const memberArr: TMember[] = getArr(MEMBER_KEY)
	const member = memberArr[idx]

	let memberId = ''
	if (!isUndefined(member)) memberId = member.id
	const groupArr: TGroup[] = getArr(GROUP_KEY)

	const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		e.stopPropagation()
		onClose()

		const filteredGroupArr = excludeMemberFromAllGroup(groupArr, memberId)
		const nonEmptyGroupArr = getNonEmptyGroupArr(filteredGroupArr)

		updateArr(GROUP_KEY, nonEmptyGroupArr)
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
