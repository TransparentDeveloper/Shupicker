import {Sheet} from '@/components/common'
import {cn} from '@/libs/shadcn/util'
import type {ComponentProps, PropsWithChildren} from 'react'
import {createContext, useContext, useState} from 'react'

type SheetPT = ComponentProps<typeof Sheet>
type SheetContextPT = {
	onOpen: (input: SheetPT) => void
	onClose: () => void
}

const SHEET_ANIMATION_STATE = {
	idle: 'opacity-0 translate-x-1',
	entered: 'opacity-100 translate-x-0',
} as const

const initSheetProps: SheetPT = {
	isOpen: false,
	title: '',
	description: '',
}
const SheetContext = createContext<SheetContextPT | null>(null)
export const useSheetStore = () => useContext(SheetContext)

export const SheetProvider = ({children}: PropsWithChildren) => {
	const [sheetProps, setSheetProps] = useState<SheetPT>(initSheetProps)
	const [animationState, setAnimationState] = useState<string>(
		SHEET_ANIMATION_STATE.idle,
	)

	const onOpen = (input: Partial<SheetPT>) => {
		setSheetProps((prev) => ({...prev, ...input, isOpen: true}))
		setTimeout(() => {
			setAnimationState(SHEET_ANIMATION_STATE.entered)
		}, 1)
	}
	const onClose = () => {
		setAnimationState(SHEET_ANIMATION_STATE.idle)
		setTimeout(() => {
			setSheetProps(initSheetProps)
		}, 301)
	}

	return (
		<SheetContext.Provider value={{onOpen, onClose}}>
			{children}
			{sheetProps.isOpen && (
				<Sheet
					{...sheetProps}
					className={cn('transition-all duration-300', animationState)}
				/>
			)}
		</SheetContext.Provider>
	)
}
