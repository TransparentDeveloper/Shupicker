import {cn} from '@/libs/shadcn/util'
import type {InputHTMLAttributes} from 'react'
import {forwardRef} from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({className, type, ...props}, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-14 w-full items-center rounded-md border border-gray-500 bg-black px-3 py-2 text-base text-gray-200 placeholder:text-base placeholder:text-gray-500 focus:border-gray-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
					className,
				)}
				ref={ref}
				{...props}
			/>
		)
	},
)

Input.displayName = 'Input'
