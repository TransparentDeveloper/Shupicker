import { Dialog } from '@/components'
import type { DialogProps } from '@/components/common/dialog/dialog.type'
import type { PropsWithChildren } from 'react'
import { createContext, useContext, useState } from 'react'
import type { DialogContextProps } from './dialog.context.type'

const DialogContextInit = {
	onOpen: () => {},
	onClose: () => {}
}

const DialogContext = createContext<DialogContextProps>(DialogContextInit)

export const useDialogStore = () => useContext(DialogContext)
export const DialogProvider = ({ children }: PropsWithChildren) => {
	const [dialogAttributesArray, setDialogAttributesArray] = useState<Array<DialogProps>>([])

	const onOpen = ({ ...props }: DialogProps) => {
		setDialogAttributesArray((prev) => {
			const _prev = [...prev]
			props.isOpen = true
			_prev.push(props)
			return _prev
		})
	}

	const onClose = () => {
		setDialogAttributesArray((prev) => {
			if (!!!prev.length) return prev
			const _prev = [...prev]
			const latestDialogsProps = _prev.pop()
			latestDialogsProps!.isOpen = false
			return _prev
		})
	}

	return (
		<DialogContext.Provider value={{ ...{ onOpen, onClose } }}>
			{children}
			{dialogAttributesArray.map((attributes, idx) => (
				<Dialog key={idx} {...attributes} />
			))}
		</DialogContext.Provider>
	)
}
