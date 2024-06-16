import {ScrollArea} from '@/components/ui'
import {PlusSquareIcon} from 'lucide-react'

export const RegisterSection = () => {
	return (
		<div className='grid h-full w-full grid-rows-[65px_1fr_48px] gap-[0px] p-6'>
			<CardHeader title='회원 등록' description='회원 및 속성을 등록하세요.' />
			<table
				className='flex h-full flex-col items-start overflow-hidden'
				width='100%'
			>
				<tr className='grid h-[70px] w-full grid-cols-[1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[2px] p-2 text-center'>
					<th>이름</th>
					<th>등록시간</th>
					<th></th>
					<th className='text-end'>게임 횟수</th>
				</tr>

				<ScrollArea className='h-full w-full'>
					<tr className='grid h-[55px] w-full grid-cols-[1fr_1fr_1fr_1fr] items-center justify-center rounded-none border-b-[2px] p-2 text-center'>
						<td>이윤신</td>
						<td>ㅁㄴㅇ라</td>
						<td></td>
						<td className='text-end'>ㅁㄴㅇㄹ</td>
					</tr>
				</ScrollArea>
			</table>
			<AddMemberButton />
		</div>
	)
}

const AddMemberButton = () => {
	return (
		<button className='flex h-[48px] w-full cursor-pointer items-center justify-center'>
			<div className='flex h-full w-fit min-w-[50%] border-spacing-28 items-center justify-center gap-2 rounded-lg border-[3px] border-dotted border-[#777777] text-[#777777] transition-colors duration-200 hover:bg-white'>
				<PlusSquareIcon color='#777777' className='bg-transparent' />
				추가하기
			</div>
		</button>
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
		<header className='flex h-[65px] flex-col justify-start gap-2'>
			<h3 className='text-2xl font-semibold leading-none tracking-tight'>
				{title}
			</h3>
			<p className='text-base text-gray-500'>{description}</p>
		</header>
	)
}
