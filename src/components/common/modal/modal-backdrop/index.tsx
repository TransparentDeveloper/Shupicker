import {useModal} from '@/hooks/use-modal'
import {cn} from '@/libs/shadcn/util'
import type {ModalBackdropPT} from './modal-backdrop.type'

export const ModalBackdrop = ({children, className}: ModalBackdropPT) => {
	const {onClose} = useModal()
	return (
		<div
			role='dialog'
			aria-hidden
			onClick={onClose}
			className={cn(
				'fixed left-0 top-0 m-0 flex h-dvh w-dvw items-center justify-center bg-black/50 p-0',
				className,
			)}
		>
			{children}
		</div>
	)
}
