import {SectionBase, SectionHeader} from '@/components/common/section-base'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import {useModal} from '@/hooks/use-modal'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'
import {DeleteGroupModal} from './sub/delete-group-modal'
import {GroupItem} from './sub/group-item'

export const RecordSection = () => {
	const {getArr} = useManageDataOnUrl()
	const {onOpen} = useModal()

	const groups: TGroup[] = getArr(GROUP_KEY)
	const members: TMember[] = getArr(MEMBER_KEY)

	const onOpenDeleteGroupModal = (
		group: TGroup,
		members: TMember[],
		groupIdx: number,
	) => {
		onOpen({
			children: <DeleteGroupModal {...{group, members, groupIdx}} />,
		})
	}

	return (
		<SectionBase className='grid grid-rows-[50px_1fr] gap-[35px]'>
			<SectionHeader
				title='그룹, 참여기록 관리'
				description='회원들의 활동 참여 이력을 기록합니다.'
			/>
			<div className='flex h-full w-full flex-col items-center justify-start gap-[20px] overflow-x-hidden overflow-y-scroll scrollbar-hide'>
				{groups.map((group, groupIdx) => (
					<GroupItem
						key={group.id}
						{...{group, members, groupIdx, onOpenDeleteGroupModal}}
					/>
				))}
			</div>
		</SectionBase>
	)
}
