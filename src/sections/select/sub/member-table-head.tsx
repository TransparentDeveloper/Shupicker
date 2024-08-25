import {isEqual, toggleBetweenPair} from '@/functions/common'
import {cn} from '@/libs/shadcn/util'
import type {TOrder, TSortBy} from '@/types'
import type {Dispatch, SetStateAction} from 'react'

type MemberTableHeadPT = {
	sortBy: TSortBy
	order: TOrder
	setSortBy: Dispatch<SetStateAction<TSortBy>>
	setOrder: Dispatch<SetStateAction<TOrder>>
}
type TTableTabs = {
	labels: string[]
	values: TSortBy[]
}

const COUNT_TABLE_TABS = 4
const TABLE_TABS: TTableTabs = {
	labels: ['이름', '등록 이후', '총\n게임횟수', `5분 당\n평균게임횟수`],
	values: ['name', 'createAt', 'cntPlay', 'cntPerTime'],
} as const

export const MemberTableHead = ({
	sortBy,
	order,
	setSortBy,
	setOrder,
}: MemberTableHeadPT) => {
	const onClickTableTab = (clickedSortBy: TSortBy) => {
		if (isEqual(clickedSortBy, sortBy))
			setOrder((prev) => toggleBetweenPair(prev, ['asc', 'desc']))
		else {
			setSortBy(clickedSortBy)
			setOrder('desc')
		}
	}

	return (
		<thead className='h-fit w-full'>
			<tr className='grid h-[65px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[2px] p-2 text-center'>
				<th />
				{Array.from({length: COUNT_TABLE_TABS}).map((_, idx) => {
					const tableLabel = TABLE_TABS.labels[idx]
					const tabValue = TABLE_TABS.values[idx]
					const isToggle = tabValue === sortBy
					return (
						<th
							key={tableLabel}
							className='grid h-full w-full cursor-pointer select-none grid-cols-[auto_15px] items-center justify-center whitespace-pre text-center'
							onClick={() => onClickTableTab(tabValue)}
						>
							{tableLabel}
							{isToggle && <SortingToggle {...{order}} />}
						</th>
					)
				})}
			</tr>
		</thead>
	)
}

type SortingTogglePT = {
	order: TOrder
}
const SortingToggle = ({order}: SortingTogglePT) => {
	const isDesc = order === 'desc'
	const isAsc = !isDesc
	return (
		<div className='flex h-full w-fit flex-col items-center justify-center justify-self-end'>
			<div
				className={cn(
					'flex h-[13px] items-center justify-center text-gray-600',
					isDesc && 'text-white',
				)}
			>
				•
			</div>
			<div
				className={cn(
					'flex h-[13px] items-center justify-center text-gray-600',
					isAsc && 'text-white',
				)}
			>
				•
			</div>
		</div>
	)
}
