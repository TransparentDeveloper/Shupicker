import {SectionBase, SectionHeader} from '@/components/common/section-base'
import {GroupList} from './group-list'

export const RecordSection = () => {
	return (
		<SectionBase className='grid grid-rows-[50px_1fr] gap-[35px]'>
			<SectionHeader
				title='그룹, 참여기록 관리'
				description='회원들의 활동 참여 이력을 기록합니다.'
			/>
			<GroupList />
		</SectionBase>
	)
}
