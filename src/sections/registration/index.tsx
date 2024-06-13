import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	ScrollArea,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui'
import {PlusSquareIcon} from 'lucide-react'

export const RegisterSection = () => {
	return (
		<Card className='h-full w-full overflow-hidden'>
			<CardHeader className='pb-2'>
				<CardTitle>회원 등록</CardTitle>
				<CardDescription>회원 및 속성을 등록하세요.</CardDescription>
			</CardHeader>
			<CardContent className='relative h-4/6 w-full'>
				<div className='sticky top-0 z-10'>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className='w-[150px] text-center'>이름</TableHead>
								<TableHead className='text-center'>등록시간</TableHead>
								<TableHead className='text-right'>게임횟수</TableHead>
							</TableRow>
						</TableHeader>
					</Table>
				</div>
				<ScrollArea className='h-[calc(100%-64px)] w-full'>
					<Table>
						<TableBody>
							{Array.from({length: 8}).map((_, idx) => (
								<MemberInfoOne key={idx} />
							))}
						</TableBody>
					</Table>
				</ScrollArea>
			</CardContent>
			<CardFooter>
				<OpenModalButton />
			</CardFooter>
		</Card>
	)
}

const MemberInfoOne = () => {
	return (
		<TableRow>
			<TableCell className='w-[150px] text-center font-medium'>1</TableCell>
			<TableCell className='text-center'>20:00</TableCell>
			<TableCell className='text-right'>10 회</TableCell>
		</TableRow>
	)
}

const OpenModalButton = () => {
	return (
		<button className='flex h-12 w-full cursor-pointer items-center justify-center'>
			<div className='flex h-full w-fit min-w-[50%] border-spacing-28 items-center justify-center gap-2 rounded-lg border-[3px] border-dotted border-[#777777] text-[#777777] transition-colors duration-200 hover:bg-white'>
				<PlusSquareIcon color='#777777' className='bg-transparent' />
				추가하기
			</div>
		</button>
	)
}
