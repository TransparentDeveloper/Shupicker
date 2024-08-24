import {memo} from 'react'

export const TableHead = memo(() => {
	return (
		<thead className='flex h-fit w-full flex-col items-start'>
			<tr className='grid h-fit min-h-[40px] w-full grid-cols-[2rem_1fr_1fr_1fr_1fr] items-end justify-center rounded-none border-b-[2px] px-2 py-1 text-center'>
				<th></th>
				<th>이름</th>
				<th>등록시간</th>
				<th></th>
				<th className='text-end'>게임 횟수</th>
			</tr>
		</thead>
	)
})
TableHead.displayName = 'TableHead'
