import {Button, Checkbox} from '@/components/common'
import {GROUP_KEY, MEMBER_KEY} from '@/constants'
import {useManageDataOnUrl} from '@/hooks'
import type {TMember, TOrder, TSortBy} from '@/types'
import {getFormedTime, getTimeDiff, getTimeStamp} from '@/utils'
import {getEmptyArray, removeSomePrimitiveElement} from '@/utils/array-manager'
import _ from 'lodash'
import type {Dispatch, SetStateAction} from 'react'
import {useState} from 'react'
import {createNewGroup, raisePlayingCnt, sortMembers} from './sorting.utils'

export const SortingSection = () => {
	const {getArr, saveArr, addToArr, flush} = useManageDataOnUrl()
	const [order, setOrder] = useState<TOrder>('desc')
	const [sortBy, setSortBy] = useState<TSortBy>('cntPerTime')
	const [selectedIdArr, setSelectedIdArr] = useState<string[]>(getEmptyArray())
	const members = getArr<TMember>(MEMBER_KEY)
	const sortedMember = sortMembers(members, sortBy, order)

	return (
		<div className='grid h-full w-full grid-rows-[50px_50px_1fr] overflow-hidden rounded-lg border border-gray-200 p-6'>
			<CardHeader
				title='참여 인원 선택'
				description='다음 경기에 참여할 인원을 선택해주세요.'
			/>
			<SelectedItemsCounter totalNum={25} partialNum={4} />

			<div className='flex h-full w-full flex-col gap-2'>
				<table
					className='flex h-full flex-col items-start overflow-hidden border-[0.5px] border-white'
					width='100%'
				>
					<thead className='h-fit w-full'>
						<tr className='grid h-[70px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[2px] p-2 text-center'>
							<th />
							<th>이름</th>
							<th>등록된 시간</th>
							<th>총 참여횟수</th>
							<th>
								기준시간 대비
								<br /> 참여횟수
							</th>
						</tr>
					</thead>
					<tbody className='scrollbar-hide h-full w-full'>
						{sortedMember.map((member) => {
							const cntPlay = member.cntPlay
							const current = getTimeStamp()
							const timeDiff = getTimeDiff(current, member.createAt)
							const cntPerTime = cntPlay / timeDiff
							return (
								<TableRow
									key={member.id}
									name={member.name}
									id={member.id}
									time={getFormedTime(member.createAt)}
									cnt={member.cntPlay}
									cntPerTime={cntPerTime.toFixed(1)}
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
			</div>
		</div>
	)
}

const TableRow = ({
	id,
	name,
	time,
	cnt,
	cntPerTime,
	isSelected,
	onSelect,
}: {
	id: string
	name: string
	time: string
	cnt: number
	cntPerTime: string
	isSelected: boolean
	onSelect: Dispatch<SetStateAction<string[]>>
}) => {
	const onSwitchCheckbox = () => {
		onSelect((prev) => {
			if (_.includes(prev, id)) return removeSomePrimitiveElement(prev, id)
			return [...prev, id]
		})
	}
	return (
		<tr className='grid h-[55px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[0.1px] p-2 text-center text-sm font-thin italic'>
			<td className='flex h-full w-full items-center justify-center'>
				<Checkbox onClick={onSwitchCheckbox} isActive={isSelected} />
			</td>
			<td>{name}</td>
			<td>{time}</td>
			<td>{cnt} 회</td>
			<td>{cntPerTime} 회</td>
		</tr>
	)
}

const CardHeader = ({
	title,
	description,
}: {
	title: string
	description: string
}) => {
	return (
		<header className='flex h-[50px] flex-col justify-between'>
			<h3 className='text-2xl font-semibold leading-none tracking-tight'>
				{title}
			</h3>
			<p className='text-sm text-gray-500'>{description}</p>
		</header>
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
