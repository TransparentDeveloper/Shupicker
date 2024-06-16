import {Button, Input} from '@/components/common'
import {ScrollArea} from '@/components/ui'
import type {PropsWithChildren} from 'react'
import {createContext} from 'react'

const Sheet = () => {
	return (
		<div
			role='dialog'
			className='fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-end bg-black/90'
		>
			<div className='flex h-full w-[500px] flex-col gap-10 rounded-none border-l-[1px] border-gray-500 bg-black px-8 py-12'>
				<header className='flex h-fit flex-col justify-start gap-2'>
					<h3 className='w-full self-start rounded-none text-2xl font-semibold leading-none tracking-tighter'>
						새 회원 정보 입력
					</h3>
					<p className='text-base text-gray-500'>
						아래 폼을 입력하고, 새로운 회원을 등록해주세요.
					</p>
				</header>

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
			</div>
		</div>
	)
}
const SheetContext = createContext({})
export const SheetProvider = ({children}: PropsWithChildren) => {
	return (
		<SheetContext.Provider value={{}}>
			{children}
			<Sheet />
		</SheetContext.Provider>
	)
}
