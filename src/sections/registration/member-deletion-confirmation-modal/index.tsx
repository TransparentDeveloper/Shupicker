import {Button} from '@/components/common'
import {MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import type {MemberDeletionConfirmationModalPT} from './member-deletion-confirmation-modal.type'
import {NoticeSection} from './notice-section'

export const MemberDeletionConfirmationModal = ({
	idx,
}: MemberDeletionConfirmationModalPT) => {
	const {getArr, removeOneFromArr, flush} = useManageDataOnUrl()
	const {onClose} = useModal()

	const memberArr: TMember[] = getArr(MEMBER_KEY)
	const member = memberArr[idx]

	const onDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		e.stopPropagation()
		removeOneFromArr(MEMBER_KEY, idx)
		flush()
		onClose()
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
