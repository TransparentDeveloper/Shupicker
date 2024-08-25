import {cn} from '@/libs/shadcn/util'
import type {VariantProps} from 'class-variance-authority'
import {cva} from 'class-variance-authority'
import type {ButtonHTMLAttributes} from 'react'

const ButtonVariants = cva(
	'inline-flex h-fit min-h-[48px] items-center cursor-pointer justify-center whitespace-nowrap px-8 py-2 text-center text-base font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
	{
		variants: {
			variant: {
				normal: 'border-black bg-white text-black hover:bg-gray-400',
				void: 'border-gray-400 bg-transparent text-gray-400 hover:bg-white hover:text-black',
			},
			round: {
				normal: 'rounded-md',
				square: 'rounded-none',
				full: 'rounded-full',
			},
			border: {
				none: 'border-none',
				solid: 'border border-solid',
				dotted: 'border-[3px] border-dotted',
			},
			flexibility: {
				none: 'w-fit min-w-8',
				fit: 'w-fit min-w-0',
				full: 'w-full',
			},
		},
		defaultVariants: {
			variant: 'normal',
			round: 'normal',
			border: 'none',
			flexibility: 'none',
		},
	},
)

type ButtonPT = ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof ButtonVariants>
export const Button = ({
	variant,
	round,
	border,
	flexibility,
	children,
	className,
	...props
}: ButtonPT) => {
	return (
		<button
			className={cn(
				ButtonVariants({variant, round, border, flexibility}),
				className,
			)}
			{...props}
		>
			{children}
		</button>
	)
}
Button.displayName = 'Button'
