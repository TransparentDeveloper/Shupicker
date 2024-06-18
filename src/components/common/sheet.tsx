import {useSheet} from '@/hooks'
import {X} from 'lucide-react'
import type {PropsWithChildren} from 'react'

type SheetPT = PropsWithChildren<{
	isOpen: boolean
	title: string
	description: string
}>

export const Sheet = ({title, description, children}: SheetPT) => {
	const {onClose} = useSheet()
	return (
		<div
			role='dialog'
			className='fixed left-0 top-0 z-[100] flex h-full w-full items-center justify-end bg-black/90'
		>
			<div className='relative flex h-full w-[500px] flex-col gap-2 rounded-none border-l-[1px] border-gray-500 bg-black px-8 py-12'>
				<X
					onClick={onClose}
					size={30}
					className='absolute right-3 top-3 flex h-fit text-gray-500'
				/>
				<div className='flex h-full w-full flex-col gap-10'>
					<SheetHeader {...{title, description}} />
					{children}
				</div>
			</div>
		</div>
	)
}

const SheetHeader = ({title, description}: Partial<SheetPT>) => {
	return (
		<header className='flex h-fit flex-col justify-start gap-2'>
			<h3 className='w-full self-start rounded-none text-2xl font-semibold leading-none tracking-tighter'>
				{title}
			</h3>
			<p className='text-base text-gray-500'>{description}</p>
		</header>
	)
}
