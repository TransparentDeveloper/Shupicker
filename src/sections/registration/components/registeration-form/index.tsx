import {Button, Input} from '@/components/common'
import {ScrollArea} from '@/components/ui'
import {useSheet} from '@/hooks'

export const RegisterForm = () => {
	const {onClose} = useSheet()

	return (
		<>
			<ScrollArea className='h-fit max-h-[50%]'>
				<div className='flex h-full flex-col items-center gap-4 pt-4'>
					<div className='grid h-fit w-full grid-cols-[1fr_2fr] items-center justify-center gap-8'>
						<label
							className='w-full text-end text-xl font-medium leading-none'
							htmlFor='name'
						>
							이름
						</label>
						<Input placeholder='이름을 입력해주세요.' />
					</div>
					<div className='grid h-fit w-full grid-cols-[1fr_2fr] items-center justify-center gap-8'>
						<label
							className='w-full text-end text-xl font-medium leading-none'
							htmlFor='createAt'
						>
							등록시간
						</label>
						<Input placeholder='18:45' disabled />
					</div>
					<div className='grid h-fit w-full grid-cols-[1fr_2fr] items-center justify-center gap-8'>
						<label
							className='w-full text-end text-xl font-medium leading-none'
							htmlFor='playCnt'
						>
							참여 횟수
						</label>
						<Input placeholder='15 회' disabled />
					</div>
				</div>
			</ScrollArea>
			<Button className='self-end'>등록하기</Button>
		</>
	)
}
