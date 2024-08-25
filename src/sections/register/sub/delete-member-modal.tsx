import {Button} from '@/components/common'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {excludeMemberFromAllGroups} from '@/functions/group'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'

type DeleteMemberModalPT = {
	target: TMember
}
export const DeleteMemberModal = ({target}: DeleteMemberModalPT) => {
	const {onClose} = useModal()
	const {getArr, updateArr, flush} = useManageDataOnUrl()

	const members = getArr<TMember>(MEMBER_KEY)
	const groups = getArr<TGroup>(GROUP_KEY)

	const onDelete = () => {
		onClose()
		const updatedGroups = excludeMemberFromAllGroups(groups, target.id)
		const updatedMembers = members.filter((member) => member.id !== target.id)
		updateArr(MEMBER_KEY, updatedMembers)
		updateArr(GROUP_KEY, updatedGroups)
		flush()
	}
	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<Notice {...{target}} />
			<section className='mt-auto flex h-[80px] w-full items-center justify-center'>
				<Button onClick={onDelete}>삭제하기</Button>
			</section>
		</div>
	)
}

type NoticePT = {
	target: TMember
}
const Notice = ({target}: NoticePT) => {
	const memberName = target.name
	return (
		<section className='flex h-full w-full flex-col items-center justify-center gap-1 text-2xl'>
			<span>
				<strong className='font-semibold italic'>{memberName}</strong>
				<span> 님 의</span>
			</span>
			<br />
			<p className='text-lg'>모든 정보를 삭제합니다.</p>
		</section>
	)
}
