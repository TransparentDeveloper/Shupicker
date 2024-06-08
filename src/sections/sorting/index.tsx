import {MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import type {TMember, TOrder, TSortBy} from '@/types'
import {useState} from 'react'
import {sortMembers} from './sorting.utils'

export const SortingSection = () => {
	const {getArr, addToArr} = useManageDataOnUrl()
	const [order, setOrder] = useState<TOrder>('desc')
	const [sortBy, setSortBy] = useState<TSortBy>('cntPerTime')
	const members = getArr<TMember>(MEMBER_KEY)
	const sortedMember = sortMembers(members, sortBy, order)

	return (
		<div className='bg-green-400 w-[800px] h-96 flex justify-center items-center flex-col overflow-y-scroll overflow-x-hidden'>
			<div className='flex justify-center items-center gap-4 border-2 border-red-500'>
				<button onClick={() => setOrder('asc')}>asc</button>
				<button onClick={() => setOrder('desc')}>desc</button>
			</div>
			Sorting
			<div className='flex justify-center items-center gap-5'>
				<button onClick={() => setSortBy('name')}>이름</button>
				<button onClick={() => setSortBy('cntPlay')}>참여횟수-순</button>
				<button onClick={() => setSortBy('createAt')}>생성시간-순</button>
				<button onClick={() => setSortBy('cntPerTime')}>
					생성시간-대비-참여횟수-순
				</button>
			</div>
			{sortedMember.map((member) => (
				<MemberBox key={member.id} {...{member}} />
			))}
		</div>
	)
}

const MemberBox = ({member}: {member: TMember}) => {
	return (
		<div className='border-2 border-black rounded'>
			{member.name} \ {member.cntPlay} \ {member.createAt}
		</div>
	)
}
