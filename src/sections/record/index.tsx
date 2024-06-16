import {ScrollArea} from '@/components/ui'

export const RecordSection = () => {
	return (
		<div className='grid h-full w-full grid-rows-[65px_1fr] gap-[35px] p-6'>
			<CardHeader
				title='그룹, 참여기록 관리'
				description='회원들의 활동 참여 이력을 기록합니다.'
			/>
			<GroupList />
		</div>
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
const GroupItem = ({order}: {order: number}) => {
	return (
		<div className='grid h-[70px] w-full grid-cols-[72px_1fr] rounded-[15px] border-[2px] border-white'>
			<div className='flex h-full w-full items-center justify-center'>
				<h4 className='text-xl font-semibold'>{order}</h4>
			</div>

			<div className='flex flex-col items-start justify-center'>
				<p>Group {order}</p>
				<p className='text-sm text-gray-400'>
					member1 | member2 | member3 | member4
				</p>
			</div>
		</div>
	)
}
const GroupList = () => {
	const $tmpGroupArr = Array.from({length: 10})
	return (
		<ScrollArea>
			<div className='flex flex-col items-center gap-[30px]'>
				{$tmpGroupArr.map((_, idx) => (
					<GroupItem key={idx} order={idx + 1} />
				))}
			</div>
		</ScrollArea>
	)
}
