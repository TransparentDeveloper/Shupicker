import {Checkbox} from '@/components/common'
import {ScrollArea} from '@/components/ui'
import {useState} from 'react'

export const SortingSection = () => {
	return (
		<div className='grid h-full w-full grid-rows-[50px_50px_1fr] overflow-hidden rounded-lg border border-gray-200 p-6'>
			<CardHeader
				title='참여 인원 선택'
				description='다음 경기에 참여할 인원을 선택해주세요.'
			/>
			<SelectedItemsCounter totalNum={25} partialNum={4} />

			<table
				className='flex h-full flex-col items-start overflow-hidden border-[0.5px] border-white'
				width='100%'
			>
				<tr className='grid h-[70px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[2px] p-2 text-center'>
					<div />
					<th>이름</th>
					<th>등록된 시간</th>
					<th>총 참여횟수</th>
					<th>
						기준시간 대비
						<br /> 참여횟수
					</th>
				</tr>
				<ScrollArea className='h-full w-full'>
					<TableRow name='Jeff' time='12시간 12분' cnt={10} cntPerTime={3} />
				</ScrollArea>
			</table>
		</div>
	)
}

const TableRow = ({
	name,
	time,
	cnt,
	cntPerTime,
}: {
	name: string
	time: string
	cnt: number
	cntPerTime: number
}) => {
	const [isChecked, setIsChecked] = useState(false)
	const onSwitchCheckbox = () => setIsChecked((prev) => !prev)
	return (
		<tr className='grid h-[55px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[0.1px] p-2 text-center text-sm font-thin italic'>
			<td className='flex h-full w-full items-center justify-center'>
				<Checkbox onClick={onSwitchCheckbox} isActive={isChecked} />
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
