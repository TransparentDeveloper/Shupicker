import {Button} from '@/components/common/button'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {addOnlyGMemberPlays} from '@/functions/group'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'

type DeleteGroupModalPT = {
	group: TGroup
	members: TMember[]
	groupIdx: number
}
export const DeleteGroupModal = ({
	group,
	members,
	groupIdx,
}: DeleteGroupModalPT) => {
	const {updateArr, removeOneFromArr, flush} = useManageDataOnUrl()
	const {onClose} = useModal()
	const groupName = `Group ${groupIdx + 1}`

	const onDelete = () => {
		onClose()

		const updatedMembers = addOnlyGMemberPlays(group, members, -1)
		updateArr<TMember>(MEMBER_KEY, updatedMembers)
		removeOneFromArr<TGroup>(GROUP_KEY, groupIdx)
		flush()
	}
	return (
		<div className='flex h-full w-full flex-col items-center justify-center'>
			<Notice {...{groupName}} />
			<section className='mt-auto flex h-[80px] w-full items-center justify-center'>
				<Button onClick={onDelete}>그룹 해체</Button>
			</section>
		</div>
	)
}

type NoticePT = {
	groupName: string
}
const Notice = ({groupName}: NoticePT) => {
	return (
		<section className='flex h-full w-full flex-col items-center justify-center gap-8 text-2xl'>
			<strong className='font-semibold italic'>{groupName}</strong>
			<p className='text-lg'>해체합니다.</p>
		</section>
	)
}
