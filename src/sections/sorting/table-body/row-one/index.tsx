import {Checkbox} from '@/components/common'
import {removeElement} from '@/functions/common'
import {getAvgPlayPerMinute, getMinuteAge} from '@/functions/member'
import type {RowOnePT} from './row-one.type'

export const RowOne = ({member, isSelected, onSelect}: RowOnePT) => {
	const id = member.id
	const name = member.name
	const age = getMinuteAge(member)
	const play = member.cntPlay
	const avgPlayPer5Min = getAvgPlayPerMinute(member, 5)

	const roundedAvgPlay = avgPlayPer5Min.toFixed(2)

	const onSwitchCheckbox = () => {
		onSelect((prev) => {
			if (prev.includes(id)) return removeElement(prev, id)
			return [...prev, id]
		})
	}
	return (
		<tr className='grid h-[55px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[0.1px] p-2 text-center text-sm font-thin'>
			<td className='flex h-full w-full items-center justify-center'>
				<Checkbox onClick={onSwitchCheckbox} isActive={isSelected} />
			</td>
			<td>{name}</td>
			<td>{`${age} 분`}</td>
			<td>{`${play} 회`}</td>
			<td>{`${roundedAvgPlay} 회`}</td>
		</tr>
	)
}
