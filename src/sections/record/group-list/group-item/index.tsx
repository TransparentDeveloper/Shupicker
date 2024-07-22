import {MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import type {TMember} from '@/types'
import type {TGroup} from '@/types/group'
import {extractMembersById} from '../../record.utils'

export const GroupItem = ({order, group}: {order: number; group: TGroup}) => {
	const {getArr} = useManageDataOnUrl()
	const memberArr: TMember[] = getArr(MEMBER_KEY)

	const groupMembers = extractMembersById(memberArr, group.memberIds)
	const membersNameArr = groupMembers.map((group) => group.name)
	return (
		<div className='grid h-[70px] w-full grid-cols-[72px_1fr] rounded-[15px] border-[2px] border-white'>
			<div className='flex h-full w-full items-center justify-center'>
				<h4 className='text-xl font-semibold'>{order}</h4>
			</div>

			<div className='flex flex-col items-start justify-center'>
				<p>Group {order}</p>
				<p className='text-sm text-gray-400'>{membersNameArr.join(' | ')}</p>
			</div>
		</div>
	)
}
