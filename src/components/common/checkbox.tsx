import {cn} from '@/libs/shadcn/util'
import {Check} from 'lucide-react'
import type {HTMLAttributes} from 'react'

type TCheckbox = HTMLAttributes<HTMLButtonElement> & {
	isActive?: boolean
}
export const Checkbox = ({isActive = false, ...props}: TCheckbox) => {
	return (
		<button
			className={cn(
				'flex h-5 w-5 cursor-pointer items-center justify-center rounded-sm border-[1px] border-white bg-transparent text-center',
				isActive && `bg-white`,
			)}
			{...props}
		>
			{isActive && <Check color='black' />}
		</button>
	)
}
