import {Button, Checkbox} from '@/components/common'
import {
	SectionBase,
	SectionHeader,
} from '@/components/common/section-base/index.tsx'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import type {TMember, TOrder, TSortBy} from '@/types'
import {getEmptyArray, removeSomePrimitiveElement} from '@/utils/array-manager'
import {createNewGroup} from '@/utils/group-manager'
import {getTimeStamp} from '@/utils/time-manager.ts'
import _ from 'lodash'
import {useState} from 'react'
import {SortingToggle} from './sorting-toggle.ts'
import {
	DEFAULT_TIME_CHUNK,
	TABLE_COLS,
	TABLE_HEAD_MAPPER,
} from './sorting.constant.ts'
import type {RowTableDataPT} from './sorting.type'
import {
	appendUnit,
	getFormattedCntPlayPerTimeChunk,
	getFormattedMinuteDiff,
	raisePlayingCnt,
	sortMembers,
} from './sorting.utils'

export const SortingSection = () => {
	const {getArr, saveArr, addToArr, flush} = useManageDataOnUrl()
	const [order, setOrder] = useState<TOrder>('desc')
	const [sortBy, setSortBy] = useState<TSortBy>('cntPerTime')
	const [selectedIdArr, setSelectedIdArr] = useState<string[]>(getEmptyArray())
	const members = getArr<TMember>(MEMBER_KEY)
	const sortedMember = sortMembers(members, sortBy, order)

	const onClickTableHeadOne = (focusedSortBy: TSortBy) => {
		if (focusedSortBy === sortBy) {
			setOrder((prev) => {
				if (prev === 'asc') return 'desc'
				return 'asc'
			})
		} else {
			setSortBy(focusedSortBy)
			setOrder('desc')
		}
	}

	return (
		<SectionBase className='grid grid-rows-[50px_50px_1fr_3rem] gap-1'>
			<SectionHeader
				title='참여 인원 선택'
				description='다음 경기에 참여할 인원을 선택해주세요.'
			/>
			<SelectedItemsCounter
				totalNum={selectedIdArr.length}
				partialNum={members.length}
			/>
			<table
				className='flex h-full flex-col items-start overflow-hidden border-[0.5px] border-white'
				width='100%'
			>
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
										onClickTableHeadOne(value)
									}}
								>
									<p className='whitespace-pre'>{label}</p>
									{isToggle && <SortingToggle order={order} />}
								</th>
							)
						})}
					</tr>
				</thead>
				<tbody className='h-full w-full overflow-y-scroll scrollbar-hide'>
					{sortedMember.map((member) => {
						return (
							<RowTableData
								key={member.id}
								{...{member}}
								isSelected={selectedIdArr.includes(member.id)}
								onSelect={setSelectedIdArr}
							/>
						)
					})}
				</tbody>
			</table>
			<Button
				className='w-full'
				onClick={() => {
					if (selectedIdArr.length === 0) {
						alert('선택된 회원이 없습니다.')
						return
					}
					const updatedMembers = raisePlayingCnt(members, selectedIdArr)
					const newGroup = createNewGroup(selectedIdArr)
					addToArr(GROUP_KEY, newGroup)
					saveArr(MEMBER_KEY, updatedMembers)
					setSelectedIdArr(getEmptyArray())
					flush()
				}}
			>
				그룹 추가
			</Button>
		</SectionBase>
	)
}

export const RowTableData = ({
	member,
	isSelected,
	onSelect,
}: RowTableDataPT) => {
	const {id, createAt, name, cntPlay} = member

	const current = getTimeStamp()

	const forMattedMinuteDiff = getFormattedMinuteDiff(createAt, current)
	const forMattedCntPlay = appendUnit(cntPlay, '회')
	const formattedCntPlayPerTimeChunk = getFormattedCntPlayPerTimeChunk(
		cntPlay,
		current,
		createAt,
		DEFAULT_TIME_CHUNK,
	)

	const onSwitchCheckbox = () => {
		onSelect((prev) => {
			if (_.includes(prev, id)) return removeSomePrimitiveElement(prev, id)
			return [...prev, id]
		})
	}
	return (
		<tr className='grid h-[55px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[0.1px] p-2 text-center text-sm font-thin'>
			<td className='flex h-full w-full items-center justify-center'>
				<Checkbox onClick={onSwitchCheckbox} isActive={isSelected} />
			</td>
			<td>{name}</td>
			<td>{forMattedMinuteDiff}</td>
			<td>{forMattedCntPlay}</td>
			<td>{formattedCntPlayPerTimeChunk}</td>
		</tr>
	)
}

type SelectedItemsCounterPT = {
	totalNum: number
	partialNum: number
}
const SelectedItemsCounter = ({
	totalNum,
	partialNum,
}: SelectedItemsCounterPT) => {
	return (
		<section className='flex h-[50px] w-full items-center justify-end font-light'>
			<p className='inline-block font-extrabold italic'>{totalNum}&nbsp;</p> 명
			중&nbsp;
			<p className='inline-block font-extrabold italic'>{partialNum}&nbsp;</p>명
			선택 중..
		</section>
	)
}
