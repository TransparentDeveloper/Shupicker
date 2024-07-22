import {ScrollArea} from '@/components/ui'
import {GROUP_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import type {TGroup} from '@/types/group'
import {GroupItem} from './group-item'

export const GroupList = () => {
	const {getArr} = useManageDataOnUrl()
	const groupArr: TGroup[] = getArr(GROUP_KEY)
	return (
		<ScrollArea>
			<div className='flex flex-col items-center gap-[30px]'>
				{groupArr.map((group, idx) => (
					<GroupItem group={group} key={group.id} order={idx + 1} />
				))}
			</div>
		</ScrollArea>
	)
}
