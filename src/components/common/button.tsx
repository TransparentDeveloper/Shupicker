import {cn} from '@/libs/shadcn/util'
import type * as React from 'react'

type ButtonPT = React.ButtonHTMLAttributes<HTMLButtonElement>
export const Button = ({children, className, ...props}: ButtonPT) => {
	return (
		<button
			className={cn(
				'inline-flex h-12 w-fit min-w-12 items-center justify-center whitespace-nowrap rounded-md border bg-white px-8 text-center text-base font-medium text-black transition-colors hover:bg-gray-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}
Button.displayName = 'Button'
