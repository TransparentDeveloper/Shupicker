import {cn} from '@/libs/shadcn/util'
import type {SortingTogglePT} from './sorting-toggle.type'

export const SortingToggle = ({order, onHandleOrder}: SortingTogglePT) => {
	const isDesc = order === 'desc'
	return (
		<div
			role='presentation'
			className='m-0 flex h-full w-fit cursor-pointer flex-col items-center justify-center p-0'
			onClick={onHandleOrder}
		>
			<p
				className={cn(
					'flex h-[13px] items-center justify-center text-gray-600',
					isDesc && 'text-White-400',
				)}
			>
				•
			</p>
			<p
				className={cn(
					'flex h-[13px] items-center justify-center text-gray-600',
					!isDesc && 'text-White-400',
				)}
			>
				•
			</p>
		</div>
	)
}
