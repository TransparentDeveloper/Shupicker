import {Modal} from '@/components/common'
import {cn} from '@/libs/shadcn/util'
import {isUndefined} from 'lodash'
import type {PropsWithChildren} from 'react'
import {createContext, useContext, useState} from 'react'
import {createPortal} from 'react-dom'
import type {ModalContextPT, ModalPT} from './modal-context.type'

const MODAL_ANIMATION_STATE = {
	idle: `scale-95 opacity-0`,
	entered: `scale-100 opacity-100`,
} as const

const initModalProps: ModalPT = {
	children: undefined,
}

const ModalContext = createContext<ModalContextPT | null>(null)
export const useModalStore = () => useContext(ModalContext)

export const ModalProvider = ({children}: PropsWithChildren) => {
	const [modalProps, setModalProps] = useState<ModalPT>(initModalProps)
	const [animationState, setAnimationState] = useState<string>(
		MODAL_ANIMATION_STATE.idle,
	)

	const isOpen = !isUndefined(modalProps.children)

	const onOpen = (props: ModalPT) => {
		setModalProps((prev) => ({...prev, ...props}))
		setTimeout(() => {
			setAnimationState(MODAL_ANIMATION_STATE.entered)
		}, 1)
	}
	const onClose = () => {
		setAnimationState(MODAL_ANIMATION_STATE.idle)
		setTimeout(() => {
			setModalProps(initModalProps)
		}, 301)
	}
	return (
		<ModalContext.Provider value={{onClose, onOpen}}>
			{children}
			{isOpen &&
				createPortal(
					<Modal
						className={cn('transition-all duration-300', animationState)}
						{...{...modalProps}}
					/>,
					document.getElementById('modal-root') as Element,
				)}
		</ModalContext.Provider>
	)
}
