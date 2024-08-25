import {Checkbox} from '@/components/common'
import {
	covertToIntIfPossible,
	isLess,
	pushElement,
	removeElement,
	truncateToFixedPrecision,
} from '@/functions/common'
import {getAvgPlayPerChunk, getMinuteAge} from '@/functions/member'
import type {TMember} from '@/types'
import {useCallback, type Dispatch, type SetStateAction} from 'react'

type MemberTableBodyPT = {
	members: TMember[]
	selectedMemberIds: string[]
	setSelectedMemberIds: Dispatch<SetStateAction<string[]>>
}

const DEFAULT_TIME_CHUNK = 5

export const MemberTableBody = ({
	members,
	selectedMemberIds,
	setSelectedMemberIds,
}: MemberTableBodyPT) => {
	const onClickCheckbox = useCallback(
		(clickedMemberId: string, isSelected: boolean) => {
			if (isSelected)
				setSelectedMemberIds((prev) => removeElement(prev, clickedMemberId))
			else setSelectedMemberIds((prev) => pushElement(prev, clickedMemberId))
		},
		[setSelectedMemberIds],
	)

	return (
		<tbody className='h-full w-full overflow-y-scroll scrollbar-hide'>
			{members.map((member) => {
				const memberId = member.id
				const name = member.name
				const age = getMinuteAge(member)
				const play = member.cntPlay

				const avgPlayPer5Min = getAvgPlayPerChunk(member, DEFAULT_TIME_CHUNK)
				const truncatedAvgPlay = truncateToFixedPrecision(avgPlayPer5Min, 2)
				const avgPlay = covertToIntIfPossible(truncatedAvgPlay)

				const isFresh = isLess(age, DEFAULT_TIME_CHUNK)
				const isSelected = selectedMemberIds.includes(memberId)

				return (
					<tr
						key={memberId}
						className='grid h-[55px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[0.1px] p-2 text-center text-sm font-thin'
					>
						<td className='flex h-full w-full items-center justify-center'>
							<Checkbox
								isActive={isSelected}
								onClick={() => onClickCheckbox(memberId, isSelected)}
							/>
						</td>
						<td className='flex h-full w-full items-center justify-center'>
							{name}
						</td>
						<td className='flex h-full w-full items-center justify-center'>{`${age} 분`}</td>
						<td className='flex h-full w-full items-center justify-center'>{`${play} 회`}</td>
						<td className='flex h-full w-full items-center justify-center'>
							{isFresh && '⚠️ '}
							{`${avgPlay} 회`}
						</td>
					</tr>
				)
			})}
		</tbody>
	)
}
