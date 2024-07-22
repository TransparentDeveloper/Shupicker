import {useModal} from '@/hooks/use-modal'
import {X} from 'lucide-react'
import type {ModalBodyPT} from './modal-body.type'

export const ModalBody = ({children}: ModalBodyPT) => {
	const {onClose} = useModal()
	return (
		<div
			role='presentation'
			className='relative flex h-3/5 w-[600px] border-[1px] border-gray-500 bg-black p-2'
			onClick={(e) => {
				e.preventDefault()
			}}
		>
			{children}
			<X
				size={30}
				className='absolute right-[4px] top-[4px]'
				onClick={onClose}
			/>
		</div>
	)
}
