import {cn} from '@/libs/shadcn/util'
import type {SectionBasePT, SectionHeaderPT} from '../section'

export const SectionBase = ({children, className}: SectionBasePT) => {
	return (
		<section
			className={cn(
				'h-full w-full overflow-hidden rounded-lg border border-gray-200 p-6',
				className,
			)}
		>
			{children}
		</section>
	)
}
export const SectionHeader = ({title, description}: SectionHeaderPT) => {
	return (
		<header className='flex h-[50px] w-full flex-col justify-between'>
			<p className='text-nowrap text-2xl font-semibold leading-none tracking-tight'>
				{title}
			</p>
			<p className='text-sm font-normal text-gray-400'>{description}</p>
		</header>
	)
}
