import {Sheet} from '@/components/common'
import type {ComponentProps, PropsWithChildren} from 'react'
import {createContext, useContext, useState} from 'react'

type SheetPT = ComponentProps<typeof Sheet>
type SheetContextPT = {
	onOpen: (input: SheetPT) => void
	onClose: () => void
}

const initSheetProps: SheetPT = {
	isOpen: false,
	title: '',
	description: '',
}
const SheetContext = createContext<SheetContextPT | null>(null)
export const useSheetStore = () => useContext(SheetContext)

export const SheetProvider = ({children}: PropsWithChildren) => {
	const [sheetProps, setSheetProps] = useState<SheetPT>(initSheetProps)

	const onOpen = (input: Partial<SheetPT>) => {
		setSheetProps((prev) => ({...prev, ...input, isOpen: true}))
	}
	const onClose = () => setSheetProps(initSheetProps)

	return (
		<SheetContext.Provider value={{onOpen, onClose}}>
			{children}
			{sheetProps.isOpen && <Sheet {...sheetProps} />}
		</SheetContext.Provider>
	)
}
