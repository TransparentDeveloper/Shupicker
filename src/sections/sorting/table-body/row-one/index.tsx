import {Checkbox} from '@/components/common'
import {appendUnit, getTimeStamp} from '@/utils'
import {removeSomePrimitiveElement} from '@/utils/array-manager'
import {DEFAULT_TIME_CHUNK} from '../../sorting.constant'
import type {RowOnePT} from './row-one.type'
import {
	getFormattedCntPlayPerTimeChunk,
	getFormattedMinuteDiff,
} from './row-one.util'

export const RowOne = ({member, isSelected, onSelect}: RowOnePT) => {
	const {id, createAt, name, cntPlay} = member

	const current = getTimeStamp()

	const formattedMinuteDiff = getFormattedMinuteDiff(createAt, current)
	const forMattedCntPlay = appendUnit(cntPlay, '회')
	const formattedCntPlayPerTimeChunk = getFormattedCntPlayPerTimeChunk(
		cntPlay,
		current,
		createAt,
		DEFAULT_TIME_CHUNK,
	)

	const onSwitchCheckbox = () => {
		onSelect((prev) => {
			if (prev.includes(id)) return removeSomePrimitiveElement(prev, id)
			return [...prev, id]
		})
	}
	return (
		<tr className='grid h-[55px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[0.1px] p-2 text-center text-sm font-thin'>
			<td className='flex h-full w-full items-center justify-center'>
				<Checkbox onClick={onSwitchCheckbox} isActive={isSelected} />
			</td>
			<td>{name}</td>
			<td>{formattedMinuteDiff}</td>
			<td>{forMattedCntPlay}</td>
			<td>{formattedCntPlayPerTimeChunk}</td>
		</tr>
	)
}
