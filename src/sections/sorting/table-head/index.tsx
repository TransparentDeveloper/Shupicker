import type {TOrder, TSortBy} from '@/types'
import {TABLE_COLS, TABLE_HEAD_MAPPER} from '../sorting.constant'
import {SortingToggle} from './sorting-toggle'

type TableHead = {
	order: TOrder
	sortBy: TSortBy
	onClickHeadTap: (sortBy: TSortBy) => void
}

export const TableHead = ({sortBy, order, onClickHeadTap}: TableHead) => {
	return (
		<thead className='h-fit w-full'>
			<tr className='grid h-[70px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[2px] p-2 text-center'>
				<th />
				{Array.from({length: TABLE_COLS}).map((_, idx) => {
					const label = TABLE_HEAD_MAPPER.labels[idx]
					const value = TABLE_HEAD_MAPPER.values[idx]
					const isToggle = value === sortBy
					return (
						<th
							key={label}
							className='grid h-full cursor-pointer grid-cols-[auto_13px] items-center justify-center gap-[10px]'
							onClick={() => {
								onClickHeadTap(value)
							}}
						>
							<p className='whitespace-pre'>{label}</p>
							{isToggle && <SortingToggle {...{order}} />}
						</th>
					)
				})}
			</tr>
		</thead>
	)
}
